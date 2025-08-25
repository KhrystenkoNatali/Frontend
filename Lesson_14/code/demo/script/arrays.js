const arr = []; // создали пустой массив
console.log(arr);

const arr2 = [10, 20, "hello", true, 9.75]; // создали  массив c значениями
console.log(arr2);

console.log(arr2[0]); //получить элемент
arr2[1] = "здесь было 20"; //получить элемент
console.log(arr2);
arr2[2] = arr2[2] + " all";
console.log(arr2);

console.log(arr2.length);
arr2[arr2.length-1] = 10; // последний индекс arr.length - 1
console.log(arr2) 

arr2[arr2.length] = "add string";
console.log(arr2);

arr2[30] = "add qwerty";
console.log(arr2);

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
console.log(arr);

// methods
console.log("-------------------------");
console.log(arr);

console.log(arr.length);  // количество элементов в массиве
console.log("перебор элементов");
for (let i=0; i< arr.length; i++ ){
    console.log(arr[i]);
}

console.log("перебор элементов 2");
for (let element of arr){
    console.log(element);
}

arr.push("jack"); // добавить в конец массива
console.log(arr);

let el = arr.pop(); // удаллить элемент из конца массива, возвращает удаленный элемент
console.log(arr);
console.log(el);

arr.unshift('qwerty');
console.log(arr);

el = arr.shift();
console.log(arr);
