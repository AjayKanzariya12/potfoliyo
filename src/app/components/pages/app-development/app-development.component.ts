import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-app-development',
  templateUrl: './app-development.component.html',
  styleUrls: ['./app-development.component.scss']
})
export class AppDevelopmentComponent implements OnInit {

    industryList: any = [];
    filteredTechnologyList: any = [];
    allData: any;
    filteredData: any = [];
    constructor(
        private api: UIService,
        private router: Router,
        private route: ActivatedRoute
    ) {}
    CityName: any;
    stateName: any;
    industryName: any;
    technology: any;
    stateValue: any;
    cityValue: any;
    cityValueFilter: any;
    ngOnInit(): void {
        // this.getAlluser();
        this.api.getApp().subscribe((res) => {
            this.allData = res;
            this.filteredData = res;
            this.industryList = this.state();
            this.route.queryParams.subscribe((params) => {
                if (params.industryName || params.technology) {
                    // console.log("ngOnInit --- ", params);
                    this.industryName = params.industryName;
                    this.technology = params.technology;
                    this.stateValue = this.industryList
                        .filter((i) => i.name === this.industryName)[0]
                        ?.id.toString();
                    this.filteredTechnologyList = this.city().filter(
                        (e) => e.parentId == this.stateValue
                    );

                    if (this.technology) {
                        this.cityValueFilter =
                            this.filteredTechnologyList.filter((i) => {
                                return i.value === this.technology;
                            });
                        this.cityValue = this.cityValueFilter[0]?.id.toString();
                        this.filteredData = this.allData.filter((e) =>
                            e.tec?.includes(this.cityValueFilter[0]?.value)
                        );
                    } else {
                        // console.log(this.filteredTechnologyList);

                        this.CityName = this.state().filter(
                            (e) => e.name == this.industryName
                        )[0].name;

                        this.filteredData = this.allData.filter((e) =>
                            e.industry?.includes(this.CityName)
                        );
                    }
                }
            });
        });
    }

    onSelect(state) {
        // console.log("onSelect ----- ",typeof state.target.value,state.target.value)
        this.CityName = this.state().filter(
            (e) => e.id == state.target.value
        )[0].name;

        this.filteredData = this.allData.filter((e) =>
            e.industry?.includes(this.CityName)
        );
        // console.log(this.CityName);

        // this.stateValue = state.target.value
        this.filteredTechnologyList = this.city().filter(
            (e) => e.parentId == state.target.value
        );
        this.Urlrouter();

        // console.log(this.filteredTechnologyList);
    }

    Urlrouter() {
        this.router.navigateByUrl(
            `/App-Development?${
                this.CityName ? "industryName=" + this.CityName : ""
            }&${this.stateName ? "technology=" + this.stateName : ""}`
        );
    }

   

    onTecSelect(state) {
        // console.log("here ---- ",this.allData,state.target.value)

        this.filteredData = this.allData.filter((e) =>
            e.tec?.includes(state.target.value)
        );
        // console.log(this.filteredData);

        this.stateName = this.allData.filter((e) =>
            e.tec?.includes(state.target.value)
        )[0].tec;
        // console.log(this.stateName);

        this.Urlrouter();
    }

    state() {
        return [
            {
                id: 1,
                name: "Astrology",
            },
            {
                id: 2,
                name: "AutoPart",
            },
            {
                id: 3,
                name: "Blog",
            },
            {
                id: 4,
                name: "CarsBikes",
            },
            {
                id: 5,
                name: "Ceramic",
            },
            {
                id: 6,
                name: "Clothing",
            },
            {
                id: 7,
                name: "CrowdFund",
            },
            {
                id: 8,
                name: "Food",
            },
            {
                id: 9,
                name: "DatingAppFNL",
            },
            {
                id: 10,
                name: "Education",
            },
            {
                id: 11,
                name: "Furniture",
            },
            {
                id: 12,
                name: "Grocery",
            },
            {
                id: 13,
                name: "Jewelry",
            },
            {
                id: 14,
                name: "JobRecruitment",
            },
            {
                id: 15,
                name: "MultiVendorMarketPlace",
            },
            {
                id: 16,
                name: "News",
            },
            {
                id: 17,
                name: "Pharmacy",
            },
            {
                id: 18,
                name: "RealEstate",
            },
            {
                id: 19,
                name: "Spect",
            },
            {
                id: 20,
                name: "Sports",
            },
            {
                id: 21,
                name: "Toys",
            },
            {
                id: 22,
                name: "VideoStreaming",
            },
            {
                id:23,
                name:"AgricultureApp"
            }
        ];
    }

    city() {
        return [
            // {
            //     parentId: 1,
            //     id: 1,
            //     name: "React js",
            //     value: "react",
            // },
            // {
            //     parentId: 1,
            //     id: 2,
            //     name: "UI/UX",
            //     value: "ui",
            // },
            // {
            //     parentId: 2,
            //     id: 3,
            //     value: "angular",
            //     name: "angular",
            // },
            // {
            //     parentId: 2,
            //     id: 4,
            //     value: "php",
            //     name: "PHP",
            // },
            // {
            //     parentId: 3,
            //     value: "android",
            //     id: 5,
            //     name: "ahmedabad",
            // },
            // {
            //     parentId: 3,
            //     id: 6,
            //     name: "botad",
            //     value: "ios",
            // },
        ];
    }

    getAlluser() {
        this.api.getApp().subscribe((res) => {
            this.allData = res;
            this.filteredData = res;
        });
    }
}
