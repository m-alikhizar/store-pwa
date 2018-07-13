import sinon from 'sinon';
import * as API from '../../src/services/api.service';

describe('api.service', () => {
  it('should get products data chunk', () => {
    const products = [
      {
        id: 1,
        name: 'test1'
      },
      {
        id: 2,
        name: 'test2'
      }
    ];

    sinon.stub(API, 'fetchProducts').returns(Promise.resolve(products));

    API.getProductData(0).then((data) => {
      expect(data.length).to.equal(products.length);
    });
  });

  it('should get product data', () => {
    const product = [
      {
        id: 1,
        name: 'test1'
      }
    ];

    sinon.stub(API, 'fetchProduct').returns(Promise.resolve(product));

    API.getProductData(0).then((data) => {
      expect(data.length).to.equal(product.length);
    });
  });
});
