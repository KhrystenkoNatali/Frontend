const item1 = {
    name: 'notebook lenovo thinkpad',
    price: 1283,
    description:'cpu intel core7, ram:16gb', 
    info: function(){
        return `товар: ${this.name}; цена: ${this.price} описание: ${this.description}`;
    }, 
    note: {
      title: "qwe",
      num: 1900,
      arr: ["qwe",1]  
    }

}
console.log(item1);


const itemJSON = JSON.stringify(item1);  // object -> json
console.log(itemJSON);


let obj = JSON.parse(itemJSON);  // json -> object
    console.log(obj);