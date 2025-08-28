const product1 = {
  name: "notebook lenovo thinkpad",
  description: "cpu intel core7, ram 16gb",
  price: 1283,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
  }
};

const product2 = {
  name: "smartphone samsung galaxy",
  description: "android, 128gb storage",
  price: 899,
  info: function () {
    return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
  }
};

console.log(product1.info());
console.log(product2.info());