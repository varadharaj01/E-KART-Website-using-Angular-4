import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core'

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: ['img:only-child {background-color:white};']
})

export class HeroDetailComponent{
  heroes: Hero[] = [];
  arr: any[] = [];
  id: number;
  selected_id: number;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.selected_id = params['id']; 
    });
    this.heroService.searchHero()
      .then(heroes => {
        this.heroes = heroes;
        for (let i = 1; i <= Object.keys(heroes).length; i++) { this.arr.push(i); };
        console.log("hero search " + this.arr);
      });
   
  }

  ngAfterViewChecked() {
      $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
    $(".imagezoom-view").css("background-color", "#fff");

  }
  save(hero: Hero): void {

    this.heroService.update(hero)
      .then(() => { this.heroService.cartchange(); this.goBack(); });

  }

  goBack(): void {
    this.location.back();
  }
 

}
