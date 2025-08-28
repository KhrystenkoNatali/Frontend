const jack = {
    name: "Jack",
    age : 25,
    info: function(){
        console.log(`${this.name} ${this.age} `);
    }
};

/*  ошибка, т.к. jack константа переприсваевать значения нельзя
jack = {
    name:"peter"
}

jack.name = "Peter"; // ок 
*/


const ann = {
    fName: "Anna",
    lName: "Smith",
    age : 20
}

console.log(jack);
console.log(ann);
let users = [jack,ann, {name:"john", age: 20 }];
console.log(users);

console.log(jack.name);
jack.age = 30;
console.log (jack);


ann.name = "Anna";  // добавили поле (свойство) в объект ann
console.log(ann);
delete ann.fName;
console.log(ann);
ann.children = undefined;

console.log(ann.children);
//if (ann.children === undefined){
  if ( !("children" in ann) ){                   // проверит отсутствие\наличие поя  
    console.log("поле children нет у ann");
} else {
    console.log("поле children есть");

}
console.log("Доступ к полям через []:");
console.log(ann["name"]);   // получить значение поля с именем name 

console.log("Перебор:");
for(let key in ann){
    let value = ann[key]; // получить значение поля с именем, которое лежит в переменной key 
    console.log(`${key}: ${value}`);
}


console.log(jack.info);  // выводит саму функцию как значение поля info
console.log(jack.info());  // выводит результат вызова функции info

function Person(name, age){
    this.name = name;
    this.age = age;
    this.info = function(){
        console.log(`${this.name} ${this.age} `);
    }
}

let peter = new Person("Peter", 32);
console.log(peter);
peter.info();


