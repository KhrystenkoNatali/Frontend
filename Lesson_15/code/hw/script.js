/*
Создайте массив. Пусть в этом массиве будут числа и строки. 
Напишите функцию, которыя создаст новый массив в который поместит 
все строки из исходного массива.
*/

const arr =[1,"hello",9,"145", "Mike", 74.9, "qwe"];
console.log(arr);

console.log(getStrings(arr));
//console.log(getStrings("ertyu")); 




function getStrings(array){
    if (!Array.isArray(array)){
        return "Error!";
    }

    let res=[];
    for (let item  of array){
        if (typeof(item) === 'string'){
            res.push(item);
        }
    }

    return res;

}