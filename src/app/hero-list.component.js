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
var HeroesListComponent = (function () {
    function HeroesListComponent(heroService, router, changeDetector) {
        this.heroService = heroService;
        this.router = router;
        this.changeDetector = changeDetector;
        this.heroes = [];
        this.totalHeroPrice = 0;
    }
    HeroesListComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesListComponent.prototype.ngAfterContentChecked = function () {
        this.total = this.heroes.reduce(function (sum, hero) {
            return sum + (hero.offer_price * hero.count);
        }, 0);
        console.log("my total " + this.total);
    };
    HeroesListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService
            .getnewHeroes()
            .then(function (heroes) {
            _this.heroes = heroes.slice(1);
            var cart = heroes.length - 1;
            console.log("cart list " + cart);
        });
    };
    HeroesListComponent.prototype.DecreaseVal = function (hero) {
        if (hero.count > 1) {
            hero.count--;
        }
    };
    HeroesListComponent.prototype.IncreaseVal = function (hero) {
        if (hero.count < 5) {
            hero.count++;
        }
    };
    HeroesListComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroesListComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    return HeroesListComponent;
}());
HeroesListComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './hero-list.component.html',
        styleUrls: ['./hero-list.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.Router, core_1.ChangeDetectorRef])
], HeroesListComponent);
exports.HeroesListComponent = HeroesListComponent;
//# sourceMappingURL=hero-list.component.js.map