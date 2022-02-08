// 함수 bad_case
const ProductClient = require('./product_client');
class ProductService {
  constructor() {
    this.productClient = new ProductClient();
  }

  //이 함수를 테스트하고 싶다면?
  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then(items => items.filter(item => item.available));
  }
}

module.exports = ProductService;
