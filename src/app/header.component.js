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
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
    function HeaderComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.cart = 0;
        this.heroes = [];
        this.arr = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
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
    HeaderComponent.prototype.ngAfterViewChecked = function () {
        $('.searchbox').mouseup(function () {
            $('.searchbox').css("display", "none");
        });
        $('#searchitem').keydown(function () {
            $('.searchbox').css("display", "block");
        });
        $('#searchitem').blur(function () {
            if ($('.searchbox:hover').length == 0) {
                $('.searchbox').css("display", "none");
            }
        });
    };
    HeaderComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        console.log(hero.id);
        this.router.navigate(link);
    };
    HeaderComponent.prototype.ngAfterContentChecked = function () {
        this.getHeroes();
    };
    HeaderComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getnewHeroes()
            .then(function (response) {
            _this.response = response.slice(1);
            _this.cart = response.length - 1;
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header-component',
        templateUrl: './header.component.html',
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService, router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map