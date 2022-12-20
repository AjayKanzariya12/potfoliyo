import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    scroll: any;

    constructor(private viewportScroller: ViewportScroller ,private router:Router) {}

    public onClick (elementId: string) { 
     this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {
        
    }

    

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}