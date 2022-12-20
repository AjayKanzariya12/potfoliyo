import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(private viewportScroller: ViewportScroller ,private router:Router) {}

    public async onClick(elementId: string) { 
       await this.router.navigate(['/'])
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {
    }

}