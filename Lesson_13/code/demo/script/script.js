// тут может быть код JS
/*
    alert("hello from js");
*/

console.log("привет Java Script!!!");
console.log(3 + 6);
console.log(7 > 10);
console.log("4" + 2);  //"42"  - для строки в JS можно использовать " "  '  '   ` `
console.log("4" - 2 - "88");  // -86
console.log("4" - 2 + "8");  // 1)  "4"-2 = 2  2) 2 + "8" = "28"

// Java:   
// Java - статическая типизация, JS - динамическая типизация
// int a = 10;  
// String str = "qwer";

// JS
// let  const   var (var - устаревшее и не рекомендовано!)
const myName ="Andrey";
//myName = "qwe"; // ошибка, cons нельзя переприсвоить

//
let a = 10;
console.log('a = '+a, typeof(a));
a = "hello!";
console.log('a = '+a, typeof(a));
a = 10 > 20;
console.log('a = '+a, typeof(a));
//console.log('b =' + b); // b не объявлена   ReferenceError: b is not defined
console.log("qwertyu")

a = 5;
let b = 2;
//` ` форматировваннная строка
console.log(`a=${a}  b = ${b}`);
console.log(`a*b = ${a*b}`);
console.log(`a+b = ${a+b}` );
console.log("a-b =", a-b);
console.log("a/b =", a/b);  // не целочисленное деление!
console.log("a%b =", a%b);
console.log("a**b =", a**b);


a="5";
if (a === 5 ){
    console.log(`a = 5 true`);
} else {
    console.log(`a = 5 false`);
}

for(let i=0; i<3; i++){
    console.log("finish!");
}
