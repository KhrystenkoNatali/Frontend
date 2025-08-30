console.log("1");
setTimeout(() => console.log("2"), 3000);
//for(let i = 0; i<100000; i++){let a=10/2}
setTimeout(() => console.log("3"), 1000);
console.log("4");
console.log("-------------------------------------------"); 
setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
    }, 5000);
  }, 1000);
}, 3000);
