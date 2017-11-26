import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { "id": 10, "name": "Collar Tshirt", "offer_price":500, "original_price":"630", "url":"asset/images/ctshirt.jpg","category":"Men", "type":"Dresses", "count":1 }
    
    ];
    return {heroes};
  }
}
