import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

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
        this.api.getgraphic().subscribe((res) => {
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
                            e.tec ===this.tecValueFilter?.value
                        );
                        console.log(this.filteredData)
                        
                    } else {
                        // console.log(this.filteredTechnologyList);

                        this.industryName = this.industryArray().filter(
                            (e) => e.name == this.industryName
                        )[0].name;

                        this.filteredData = this.allData.filter((e) =>
                            e.industry === (this.industryName)
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
            e.industry === (this.industryName)
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
            `/graphics?${
                this.industryName ? "industryName=" + this.industryName : ""
            }&${this.tecName ? "technology=" + this.tecName : ""}`
        );
    }

    onTecSelect(state) {
        console.log("here ---- ",state.target.value)

        this.filteredData = this.allData.filter((e) =>
            e.tec === (state.target.value)
        );
        // console.log(this.filteredData);

        this.tecName = this.allData.filter((e) =>
            e.tec === (state.target.value)
        )[0].tec;
        // console.log(this.tecName);

        this.Urlrouter();
    }

    industryArray() {
        return [
            {
                id: 1,
                name: "Logo",
            },
            {
                id: 2,
                name: "Flyer",
            },
           
        ];
    }

    tecArray() {
        return [
        
            {
                parentId: 1,
                id: 1,
                name: "Astrology",
                value: "Astrology",
            },
            {
                parentId: 1,
                id: 2,
                name: "AutoParts",
                value: "AutoParts",
            },
            {
                parentId: 1,
                id: 3,
                name: "Blog",
                value: "Blog",
            },
            {
                parentId: 1,
                id: 4,
                name: "Cab",
                value: "Cab",
            },
            {
                parentId: 1,
                id: 5,
                name: "Ceramic",
                value: "Ceramic",
            },
            {
                parentId: 1,
                id: 6,
                name: "Cloth",
                value: "Cloth",
            },
            {
                parentId: 1,
                id: 7,
                name: "Crowdfunding",
                value: "Crowdfunding",
            },
            {
                parentId: 1,
                id: 8,
                name: "Dating",
                value: "Dating",
            },
            {
                parentId: 1,
                id: 9,
                name: "Education",
                value: "Education",
            },
            {
                parentId: 1,
                id: 10,
                name: "Food",
                value: "Food",
            },
            {
                parentId: 1,
                id: 11,
                name: "Furniture",
                value: "Furniture",
            },
            {
                parentId: 1,
                id: 12,
                name: "Grocery",
                value: "Grocery",
            },
            {
                parentId: 1,
                id: 31,
                name: "Jewelry",
                value: "jewelry",
            },
            {
                parentId: 1,
                id: 13,
                name: "Job",
                value: "job",
            },
            {
                parentId: 1,
                id: 14,
                name: "Magazine",
                value: "magazine",
            },
            {
                parentId: 1,
                id: 15,
                name: "MultiVendor",
                value: "MultiVendor",
            },
            {
                parentId: 1,
                id: 16,
                name: "Pharma",
                value: "Pharma",
            },
            {
                parentId: 1,
                id: 17,
                name: "Portfolio",
                value: "Portfolio",
            },
            {
                parentId: 1,
                id: 18,
                name: "Software",
                value: "Software",
            },
            {
                parentId: 1,
                id: 19,
                name: "Specs",
                value: "Specs",
            },
            {
                parentId: 1,
                id: 20,
                name: "Sports",
                value: "Sports",
            },
            {
                parentId: 1,
                id: 21,
                name: "Toys",
                value: "Toys",
            },
            {
                parentId: 1,
                id: 22,
                name: "VideoStream",
                value: "VideoStream",
            },         
    //___________________________________________________

    {
        parentId: 2,
        id: 24,
        name: "Astrology",
        value: "Flyer-Astrology",
    },
    {
        parentId: 2,
        id: 25,
        name: "AutoParts",
        value: "Flyer-AutoParts",
    },
    {
        parentId: 2,
        id: 3,
        name: "Blog",
        value: "Flyer-Blog",
    },
    {
        parentId: 2,
        id: 4,
        name: "Cab",
        value: "Flyer-Cab",
    },
    {
        parentId: 2,
        id: 5,
        name: "Ceramic",
        value: "Flyer-Ceramic",
    },
    {
        parentId: 2,
        id: 6,
        name: "Cloth",
        value: "Flyer-Cloth",
    },
    {
        parentId: 2,
        id: 7,
        name: "Crowdfunding",
        value: "Flyer-Crowdfunding",
    },
    {
        parentId: 2,
        id: 8,
        name: "Dating",
        value: "Flyer-Dating",
    },
    {
        parentId: 2,
        id: 9,
        name: "Education",
        value: "Flyer-Education",
    },
    {
        parentId: 2,
        id: 10,
        name: "Food",
        value: "Flyer-Food",
    },
    {
        parentId: 2,
        id: 11,
        name: "Furniture",
        value: "Flyer-Furniture",
    },
    {
        parentId: 2,
        id: 12,
        name: "Grocery",
        value: "Flyer-Grocery",
    },
    {
        parentId: 2,
        id: 13,
        name: "Jewelry",
        value: "Flyer-jewelry",
    },
    {
        parentId: 2,
        id: 43,
        name: "Job",
        value: "Flyer-job",
    },
    {
        parentId: 2,
        id: 14,
        name: "Magazine",
        value: "Flyer-magazine",
    },
    {
        parentId: 2,
        id: 15,
        name: "MultiVendor",
        value: "Flyer-MultiVendor",
    },
    {
        parentId: 2,
        id: 16,
        name: "Pharma",
        value: "Flyer-Pharma",
    },
    {
        parentId: 2,
        id: 17,
        name: "Portfolio",
        value: "Flyer-Portfolio",
    },
    {
        parentId: 2,
        id: 18,
        name: "solar",
        value: "Flyer-solar",
    },
    {
        parentId: 2,
        id: 19,
        name: "Specs",
        value: "Flyer-Specs",
    },
    {
        parentId: 2,
        id: 20,
        name: "Sports",
        value: "Flyer-Sports",
    },
    {
        parentId: 2,
        id: 21,
        name: "Toys",
        value: "Flyer-Toys",
    },
    {
        parentId: 2,
        id: 22,
        name: "Streaming",
        value: "Flyer-Streaming",
    },
           
        ];
    }

    getAlluser() {
        this.api.getgraphic().subscribe((res) => {
            this.allData = res;
            this.filteredData = res;
        });
    }

}

