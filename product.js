let products = [];
let id = 0; 

function resetProducts() {
    products = [];
    id = 0; 
  }
 
function addProduct(name, price) {
    if (!name || price === undefined) {
        throw new Error('name and price are required');
    }
    if (products.find(p => p.name === name)) {
        throw new Error('product already exists');
    }
    const product = { id: ++id, name, price };
    products.push(product);
    return product;
}

function removeProduct(id) {
    const index = products.findIndex(p => p.id === id);
    if(index === -1 ){
        throw new Error('product not found');
    }
    products.splice(index, 1);
}

function getProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product){
        throw new Error('product not found');
    }
    return product; 
}
function updateProduct(id, name, price) {
    const product = products.find(p => p.id === id);
    if (!product) {
        throw new Error('product not found');
    }
    if (name !== undefined) product.name = name;
    if (price !== undefined) product.price = price;     
    return product;
}
module.exports = {
    addProduct, removeProduct, resetProducts, getProduct, updateProduct
  };

