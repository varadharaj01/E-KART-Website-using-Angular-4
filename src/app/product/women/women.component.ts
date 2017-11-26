import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Hero }        from '../../hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'women-product',
  templateUrl: './women.component.html',
  
})
export class WomenComponent implements OnInit {
  constructor(private heroService: HeroService, 
    private router: Router) {}
 heroes:Hero[]=[];

 arr:any[]=[];
  
  ngOnInit(): void {
   $(window).scrollTop(0); 
    this.heroService.searchHero()
      .then(heroes => {this.heroes = heroes;
        for(let i=1;i<=Object.keys(heroes).length;i++){this.arr.push(i);};
         console.log("hero search "+this.arr);});
	
  }
}
   