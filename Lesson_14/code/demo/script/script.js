let a = 10;
let b = "7";
let c = "qwe7";
let d = true;
let e = 0;



console.log(`${a}+${b} :`, a+b); // объеденение строк
console.log(`${a}-${b} :`, a-b); // привел к типу number и выполнил выражение
console.log(`${a}-${c} :`, a-c); // привел к типу number и выполнил выражение
console.log(`${a}*${d} :`, a*d); // привел к типу number и выполнил выражение  false -> 0    true -> 1



console.log(`${a}/${e} :`, a/e); // Infinity 

//////////////////////////////////////////////
console.log("----- преобразования -----");
console.log(a, String(a), typeof(String(a) )); 
console.log(true, String(true), typeof(String(true) )); 
console.log(false, String(false), typeof(String(false) )); 
let strA  = ""+a; // строковое значение переменной a (как и String(a))

////////////////////////////////////////
let str = "872";
a = Number(str); // числовое значение a
console.log(`str=${str} Number() = ${a}`);

str = "87.2";
a = Number(str); // числовое значение a
console.log(`str=${str} Number() = ${a}`);

str = "";
a = Number(str); // числовое значение a
console.log(`str='${str}' Number() = ${a}`);

str = "77px";
a = Number(str); // числовое значение a
console.log(`str='${str}' Number() = ${a}`);

let bool = true;
a = Number(bool); // числовое значение a
console.log(`bool='${bool}' Number() = ${a}`);

bool = false;
a = Number(bool); // числовое значение a
console.log(`bool='${bool}' Number() = ${a}`);

bool = null;
a = Number(bool); // числовое значение a
console.log(`bool='${bool}' Number() = ${a}`);

let und = undefined;
a = Number(und); // числовое значение a
console.log(`und='${und}' Number() = ${a}`);


console.log(parseInt("10.1px")) // даст 10  в отличие от Number("10px") который вернет NaN 
parseFloat("3.14px")// 3.14

str="88";
a = +str;
console.log(`str='${str}' +'${str}' = ${a} typeof(a)= ${typeof(a)}`);

bool=true;
a = +bool;
console.log(`bool='${bool}' +'${bool}' = ${a} typeof(a)= ${typeof(a)}`);