import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'header-component',

  templateUrl: './header.component.html',

})
export class HeaderComponent {
  cart = 0;
  heroes: Hero[] = [];
  response: Hero[];
  arr: any[] = [];
  constructor(
    private heroService: HeroService, private router: Router) {
  }
  ngOnInit(): void {

    this.heroService.searchHero()
      .then(heroes => {
      this.heroes = heroes;
        for (let i = 1; i <= Object.keys(heroes).length; i++) { this.arr.push(i); };
        console.log("hero search " + this.arr);
      });
  }
 
  ngAfterViewChecked() {
    $('.searchbox').mouseup(function () {
      $('.searchbox').css("display", "none"); 
   });
    $('#searchitem').keydown(function () {
      $('.searchbox').css("display", "block");
    });

    $('#searchitem').blur(function () {
    if ($('.searchbox:hover').length == 0)  {
     $('.searchbox').css("display", "none"); 
    }      
  });
   
  }

   gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    console.log(hero.id)
    this.router.navigate(link);
      
  }
  ngAfterContentChecked() {
    this.getHeroes();
    
  }
  getHeroes(): void {
    this.heroService
      .getnewHeroes()
      .then(response => {
      this.response = response.slice(1);
        this.cart = response.length - 1;

      });

  }


}