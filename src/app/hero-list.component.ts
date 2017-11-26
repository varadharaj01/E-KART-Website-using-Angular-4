import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { Router }            from '@angular/router';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Hero }                from './hero';
import { HeroService }         from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: [ './hero-list.component.css' ]
})
export class HeroesListComponent implements OnInit {

  total:number;
  heroes: Hero[]=[];
  response:Hero[];
  private items: Array<any>;
  selectedHero: Hero;
 totalHeroPrice=0;


  constructor(
    private heroService: HeroService,
    private router: Router,private changeDetector: ChangeDetectorRef) { 
     }

 ngOnInit():void {
   this.getHeroes();
   
    }
    ngAfterContentChecked() {
      this.total = this.heroes.reduce(function(sum:number, hero:Hero) {
      return sum +( hero.offer_price*hero.count);
       }, 0);
       console.log("my total "+  this.total);
    }

  getHeroes(): void {
  this.heroService
        .getnewHeroes()
        .then(heroes => {this.heroes = heroes.slice(1);
        let cart=heroes.length-1;
         console.log("cart list "+cart);
      });

  }
 
 
  
DecreaseVal(hero: Hero)
{
    if (hero.count > 1) {
       hero.count--;
    }
}

IncreaseVal(hero: Hero)
{
     if (hero.count < 5) {
       hero.count++;
    }
}


  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
  



  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
