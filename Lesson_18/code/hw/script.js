const player = document.getElementById("player");

const btnUp = document.getElementById("btnUp");
const btnDown = document.getElementById("btnDown");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

let centerX = x = 180;  // смещение игрока относительно поля (left, top)
let centerY = y = 130;
const step = 20; // шаг смещение за раз

function move(direction){
    switch(direction){
        case 'up':  y = Math.max(0, y - step); break;
        case 'down': y = Math.min(y + step, 260); break;
        case 'left': x = Math.max(0, x - step); break;
        case 'right': x = Math.min(x + step,360); break;         
    }

        applyPosition(x,y);
}
 
function applyPosition(x ,y ){
    // изменение свойсв top и left игрока
    player.style.setProperty('top', y + "px");
    player.style.setProperty('left', x + "px" );
}

btnUp.addEventListener('click', (e)=>move('up'));
btnDown.addEventListener('click', (e)=>move('down'));
btnLeft.addEventListener('click', (e)=>move('left'));
btnRight.addEventListener('click', (e)=>move('right'));


document.addEventListener('keydown', (e)=>{
    console.log(e);
    switch (e.code){
        case 'ArrowUp': move('up'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
        case 'ArrowRight': move('right'); break;
        case 'Space': applyPosition(centerX,centerY);

    } 


});