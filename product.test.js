

// const { addProduct, removeProduct, getProduct, updateProduct, resetProducts } = require('./product');

const { addProduct, resetProducts, removeProduct, getProduct, updateProduct } = require('./product');
beforeEach(() => {
    resetProducts();
  });


test(' add a product', () => {
  const product = addProduct('pan', 2);
  expect(product.name).toBe('pan');
  expect(product.price).toBe(2);
});
test('should not add a product without name', () => {
  expect(() => addProduct('', 2)).toThrow('name and price are required');
});



test('remove a product', () => {
    const product = addProduct('pan', 2);
  removeProduct(product.id);
    expect(() => removeProduct(product.id)).toThrow('product not found');
});
test('should throw error if product does not exist', () => {
    expect(() => removeProduct(99)).toThrow('product not found');
  });
  

  test('get a product', () => {
    const product = addProduct('pan', 2);
    const result = getProduct(product.id);
    expect(result).toEqual(product);
});
test('should throw error if product not found', () => {
    expect(() => getProduct(99)).toThrow('product not found');
}
    );

    test('update a product', () => {
        const product = addProduct('pan', 2);
        const updatedProduct = updateProduct(product.id, 'eggs', 5);
    
        expect(updatedProduct).toEqual({ id: product.id, name: 'eggs', price: 5 });
        expect(getProduct(product.id)).toEqual(updatedProduct);
    });
    
    test('should throw error if product not found', () => {
        expect(() => updateProduct(99, 'eggs', 5)).toThrow('product not found');
    })