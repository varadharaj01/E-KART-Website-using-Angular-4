import { Component,OnInit } from '@angular/core';
import { HeroService }         from './hero.service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";

declare var $:any;
@Component({
  selector: 'my-app',
   //templateUrl: './app.component.html',
  
  template: `
  <header-component></header-component>
    <router-outlet></router-outlet>
  <footer-component></footer-component>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(private router: Router, private location: Location) { }
   ngOnInit() {
        this.location.subscribe((ev:PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((ev:any) => {
            if (ev instanceof NavigationStart) {
                if (ev.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (ev instanceof NavigationEnd) {
                if (ev.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else
                    window.scrollTo(0, 0);
            }
        });
    }  
}
  
