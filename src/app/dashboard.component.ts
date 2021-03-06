import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Hero }        from './hero';
import { HeroService } from './hero.service';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'my-dashboard',
  templateUrl: './app.component.html',
  
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService, 
    private router: Router) {}
 heroes:Hero[]=[];

 arr:any[]=[];
  
  ngOnInit(): void {
    
    this.heroService.searchHero()
      .then(heroes => {this.heroes = heroes;
        for(let i=1;i<=Object.keys(heroes).length;i++){this.arr.push(i);};
         console.log("hero search "+this.arr);});
  }
ngAfterViewChecked() {
 $('.carousel').carousel({
      interval: 170
    });
    }
}
   