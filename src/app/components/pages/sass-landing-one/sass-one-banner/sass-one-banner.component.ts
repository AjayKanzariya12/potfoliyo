import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
	selector: 'app-sass-one-banner',
	templateUrl: './sass-one-banner.component.html',
	styleUrls: ['./sass-one-banner.component.scss']
})
export class SassOneBannerComponent implements OnInit {

	constructor(public ngxSmartModalService: NgxSmartModalService) {
    }

	ngOnInit(): void {
	}

}