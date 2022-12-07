import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CompanyService } from "src/app/services/company.service";

@Component({
    selector: "app-portfolio-showcase",
    templateUrl: "./portfolio-showcase.component.html",
    styleUrls: ["./portfolio-showcase.component.scss"],
})
export class PortfolioShowcaseComponent implements OnInit {
    
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
   
}
