"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { "id": 10, "name": "Collar Tshirt", "offer_price": 500, "original_price": "630", "url": "asset/images/ctshirt.jpg", "category": "Men", "type": "Dresses", "count": 1 }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map