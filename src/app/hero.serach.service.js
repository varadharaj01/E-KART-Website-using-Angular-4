"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CategoryPipe = (function () {
    function CategoryPipe() {
    }
    CategoryPipe.prototype.transform = function (categories, searchText) {
        if (searchText == null || searchText == 0)
            return null;
        return categories.filter(function (category) {
            return category.name.indexOf(searchText.toLowerCase()) > -1;
        });
    };
    return CategoryPipe;
}());
CategoryPipe = __decorate([
    core_1.Pipe({ name: 'category' })
], CategoryPipe);
exports.CategoryPipe = CategoryPipe;
var CategoryPipe2 = (function () {
    function CategoryPipe2() {
    }
    CategoryPipe2.prototype.transform = function (categories, selected_id) {
        if (selected_id == null || selected_id == 0)
            return null;
        return categories.filter(function (category) {
            return category.id == parseInt(selected_id);
        });
    };
    return CategoryPipe2;
}());
CategoryPipe2 = __decorate([
    core_1.Pipe({ name: 'category2' })
], CategoryPipe2);
exports.CategoryPipe2 = CategoryPipe2;
//# sourceMappingURL=hero.serach.service.js.map