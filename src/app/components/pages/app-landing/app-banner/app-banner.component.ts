import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-app-banner',
    templateUrl: './app-banner.component.html',
    styleUrls: ['./app-banner.component.scss']
})
export class AppBannerComponent implements OnInit {

    constructor(public ngxSmartModalService: NgxSmartModalService) {
    }

    ngOnInit(): void {
    }

}