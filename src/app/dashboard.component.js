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
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var DashboardComponent = (function () {
    function DashboardComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.heroes = [];
        this.arr = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.searchHero()
            .then(function (heroes) {
            _this.heroes = heroes;
            for (var i = 1; i <= Object.keys(heroes).length; i++) {
                _this.arr.push(i);
            }
            ;
            console.log("hero search " + _this.arr);
        });
    };
    DashboardComponent.prototype.ngAfterViewChecked = function () {
        $('.carousel').carousel({
            interval: 170
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './app.component.html',
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map