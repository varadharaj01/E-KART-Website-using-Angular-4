"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/Rx");
var Subject_1 = require("rxjs/Subject");
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.heroesUrl = 'api/heroes'; // URL to web api
        this.cart = 0;
        this.cartvalue = new Subject_1.Subject();
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get('./asset/file.json')
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService.prototype.extractData = function (response) {
        var body = response.json().data.productlist.category1;
        return body || [];
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroe()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.getHeroe = function () {
        return this.http.get('./asset/file.json')
            .toPromise()
            .then(function (response) { return response.json().data.productlist.category1; }).catch(this.handleError);
    };
    HeroService.prototype.searchHero = function () {
        return this.http.get('./asset/file.json')
            .toPromise()
            .then(function (response) { return response.json().data.productlist; }).catch(this.handleError);
    };
    HeroService.prototype.getnewHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.cartchange = function () {
        var _this = this;
        this.getnewHeroes()
            .then(function (heroes) {
            _this.heroes = heroes.slice(1);
            _this.cart = heroes.length - 1;
            _this.cartvalue.next(_this.cart);
            console.log("cart list " + _this.cart);
        });
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers }).distinct()
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map