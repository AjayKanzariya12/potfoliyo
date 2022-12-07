import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-sass-two-banner',
  templateUrl: './sass-two-banner.component.html',
  styleUrls: ['./sass-two-banner.component.scss']
})
export class SassTwoBannerComponent implements OnInit {

    constructor(public ngxSmartModalService: NgxSmartModalService) {
    }

    ngOnInit(): void {
    }

}