let element = document.getElementById("div0");
element.innerHTML="<h1>hello!</h1>";

// все жлементы с тегом p
allP = document.getElementsByTagName("p");
console.log(allP);
for (let el of allP){
    el.style.color = "red";
    el.style.fontSize = "30px";    
}


element = document.getElementById("div1");
console.log(element.childNodes);
console.log(element.children);