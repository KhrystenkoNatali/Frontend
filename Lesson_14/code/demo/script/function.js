// вызов функции add
console.log( add(10,20) );
console.log( add("qwe","-qwa") );

let user="";

// получили элементы HTML cтраницы в виде объектов 
// соответственно, мы можем менять свойства этих объектов
let root = document.getElementById("root");  // <div id="root">
let btn =document.getElementById("btn");
let input=document.getElementById("input");

//let user = prompt("введите имя:");
btn.onclick = click;     // свойство onclick кнопки связываем с функцией click()
                         // т.е. теперь каждое нажатие на кнопку выщывает функцию click()  


// объявление функции
function click(){
    // меняем код HTML заданный в блоке root
    // используем значенте из поля input
    // естественно, изменения отражаются на странице
    root.innerHTML=
    `<h1>hello, ${input.value} </h1>  
        <p>
            пример взаимодействия с DOM
        </p>`;
    input.value="";
}

// объявление функции 
function add(a,b){
    return a + b;
}