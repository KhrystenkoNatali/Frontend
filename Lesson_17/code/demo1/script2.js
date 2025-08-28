const btnBig = document.getElementById("btnBig");
const btnNormal = document.getElementById("btnNormal");

//const textBlock = document.getElementsByClassName("text");
const textBlock = document.querySelectorAll(".text");

// el.className // свойство class элемента (получить спиок классов в виде строки)
//console.log(textBlock[0].classList);   // получить спиок классов в виде списка

/*
btnBig.onclick = () => {
      textBlock.forEach ( b => b.classList.add("big"));  
}

btnNormal.onclick = () => {
      textBlock.forEach ( b => b.classList.remove("big"));  
}
*/

btnBig.addEventListener("click", () => {
            textBlock.forEach ( b => b.classList.add("big"));  
      }
);

btnBig.addEventListener("click", () => {
            console.log("нажали на кнопку big .....");  
      }
);



btnNormal.onclick = () => {
      textBlock.forEach ( b => b.classList.remove("big"));  
}