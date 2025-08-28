let block = document.getElementById("block");
let offset = 0;

const interval = setInterval(move,30);

function move(){
    offset++;
    block.style.top = offset + "px";
    if (offset >= 500){
        clearInterval(interval);
        block.remove();
    }

}