function Product(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.info = function () {
    return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
  };
}

const prod1 = new Product("tablet xiaomi pad", 599, "snapdragon 860, 6gb RAM");
const prod2 = new Product("monitor LG", 279, "27 inch, 4K UHD");
const prod3 = new Product("keyboard logitech", 89, "mechanical, RGB");

const products = [prod1, prod2, prod3];

function printProducts(arr) {
  arr.forEach((product, index) => {
    console.log(`Товар ${index + 1}`);
    console.log(`name: ${product.name}`);
    console.log(`price: ${product.price}`);
    console.log(`description: ${product.description}`);
    console.log(`info: ${product.info()}`);
    console.log('----------------------');
  });
}

printProducts(products);