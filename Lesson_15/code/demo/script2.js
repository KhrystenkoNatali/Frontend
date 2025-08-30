let input = prompt("Введите целое число:");
let arr = input.split("");
//console.log(arr);



/*
for (let i = 0; i<arr.length;i++){
arr[i] = Number(arr[i]);
}
*/




arr = arr.map( (a)=>Number(a) )
console.log(arr);
