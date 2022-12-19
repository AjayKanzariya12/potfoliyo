import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

    industryList: any = [];
    filteredTechnologyList: any = [];
    allData: any;
    filteredData: any = [];
    constructor(
        private api: UIService,
        private router: Router,
        private route: ActivatedRoute
    ) {}
    industryName: any;
    tecName: any;
    // industryName: any;
    technology: any;
    industryId: any;
    tecId: any;
    tecValueFilter: any;
    ngOnInit(): void {
        // this.getAlluser();
        this.api.getDevelopers().subscribe((res) => {
            this.allData = res;
            this.filteredData = res;
            this.industryList = this.industryArray();
            this.route.queryParams.subscribe((params) => {
                if (params.industryName || params.technology) {
                    // console.log("ngOnInit --- ", params);
                    this.industryName = params.industryName;
                    this.technology = params.technology;
                    this.industryId = this.industryList
                        .filter((i) => i.name === this.industryName)[0]
                        ?.id.toString();
                    this.filteredTechnologyList = this.tecArray().filter(
                        (e) => e.parentId == this.industryId
                    );

                    if (this.technology) {
                        this.tecValueFilter =
                            this.filteredTechnologyList.filter((i) => {
                                return i.value === this.technology;
                            })[0];
                        this.tecId = this.tecValueFilter?.id.toString();
                        this.filteredData = this.allData.filter((e) =>
                            e.tec?.includes(this.tecValueFilter?.value)
                        );
                    } else {
                        // console.log(this.filteredTechnologyList);

                        this.industryName = this.industryArray().filter(
                            (e) => e.name == this.industryName
                        )[0].name;

                        this.filteredData = this.allData.filter((e) =>
                            e.industry?.includes(this.industryName)
                        );
                    }
                }
            });
        });
    }

    onSelect(state) {
        // console.log("onSelect ----- ",typeof state.target.value,state.target.value)
        this.industryName = this.industryArray().filter(
            (e) => e.id == state.target.value
        )[0].name;
        this.tecName = null;
        this.tecId = null;

        this.filteredData = this.allData.filter((e) =>
            e.industry?.includes(this.industryName)
        );
        // console.log(this.industryName);

        // this.industryId = state.target.value
        this.filteredTechnologyList = this.tecArray().filter(
            (e) => e.parentId == state.target.value
        );
        this.Urlrouter();

        // console.log(this.filteredTechnologyList);
    }

    Urlrouter() {
        this.router.navigateByUrl(
            `/Dedicated-Developers?${
                this.industryName ? "industryName=" + this.industryName : ""
            }&${this.tecName ? "technology=" + this.tecName : ""}`
        );
    }

    onTecSelect(state) {
        // console.log("here ---- ",this.allData,state.target.value)

        this.filteredData = this.allData.filter((e) =>
            e.tec?.includes(state.target.value)
        );
        // console.log(this.filteredData);

        this.tecName = this.allData.filter((e) =>
            e.tec?.includes(state.target.value)
        )[0].tec;
        // console.log(this.tecName);

        this.Urlrouter();
    }

    industryArray() {
        return [
            {
                id: 1,
                name: "Design",
            },
            // {
            //     id: 2,
            //     name: "RealEstate",
            // },
          
        ];
    }

    tecArray() {
        return [
            {
                parentId: 1,
                id: 1,
                name: "React js",
                value: "react",
            },
            {
                parentId: 1,
                id: 2,
                name: "UI/UX",
                value: "ui",
            },
            {
                parentId: 2,
                id: 3,
                value: "angular",
                name: "angular",
            },
            {
                parentId: 2,
                id: 4,
                value: "php",
                name: "PHP",
            },
            {
                parentId: 3,
                value: "android",
                id: 5,
                name: "ahmedabad",
            },
            {
                parentId: 3,
                id: 6,
                name: "botad",
                value: "ios",
            },
        ];
    }

    getAlluser() {
        this.api.getDevelopers().subscribe((res) => {
            this.allData = res;
            this.filteredData = res;
        });
    }
}
