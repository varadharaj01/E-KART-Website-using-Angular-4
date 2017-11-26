import { Injectable }    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Hero } from './hero';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }


  getHeroes():Observable<Hero[]> {
    return this.http.get('./asset/file.json')
     .map(this.extractData)
     .catch(this.handleError);
  }

  extractData( response : Response){

    let body = response.json().data.productlist.category1;
  
    return body || [];
  }
heroes:any;
 getHero(id: number): Promise<Hero> {
 
    return this.getHeroe()
               .then(heroes => heroes.find((hero) => hero.id === id));
               
  }


 getHeroe(): Promise<Hero[]> {
    return this.http.get('./asset/file.json')
     .toPromise()
    .then((response)=>response.json().data.productlist.category1).catch(this.handleError);

     }
  
  searchHero(): Promise<Hero[]> {
    return this.http.get('./asset/file.json')
     .toPromise()
    .then((response) => response.json().data.productlist).catch(this.handleError);

    
  }
   getnewHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  cart=0;
  cartvalue: Subject<number> = new Subject<number>();
cartchange(){
this.getnewHeroes()
        .then(heroes => {this.heroes = heroes.slice(1);
        this.cart=heroes.length-1;
        this.cartvalue.next(this.cart);
         console.log("cart list "+this.cart);});
}

  update(hero: Hero): Promise<Hero> {
      
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers}).distinct()
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);

    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

