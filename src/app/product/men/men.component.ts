import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Hero }        from '../../hero';
import { HeroService } from '../../hero.service';
@Component({
  selector: 'men-product',
  templateUrl: './men.component.html',
  
})
export class MenComponent implements OnInit {
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
}
   