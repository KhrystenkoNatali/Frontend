/*
function sum(num1,num2){
    console.log(arguments);
    console.log(num1, arguments[0]);
    console.log(num2, arguments[1]);
}
      
   let sum = (num1,num2) => {
    console.log(arguments);
    console.log(num1, arguments[0]);
    console.log(num2, arguments[1]);
   }
    */


   function sum(num1,num2, ...rest){
    console.log(num1);
    console.log(num2);
    console.log(rest);
   } 

//sum();
//sum(1);
console.log("---------------   sum(1,2) --------------------   ");
sum(1,2);
console.log("---------------   sum(1,2,3,4,'qwe','qwa') --------------------   ");
sum(1,2,3,4,"qwe","qwa");