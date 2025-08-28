let arr = [0,1,2,3,4,5];
console.log(arr);
let res = arr.splice(1,2);
console.log(arr);
console.log(res);


arr =  [0,1,2,3,4,5];
res = arr.splice(1,2, "q1","q2","q3");
console.log(arr);

arr =  [0,1,2,3,4,5];
res = arr.splice(1,0, "q1");
console.log(arr);

arr =  [0,1,2,3,4,5];
res = arr.splice(3);
console.log(res);
console.log(arr);


arr =  [0,1,2,3,4,5];
res = arr.splice(-3,2);
console.log(arr);


console.log("------------- flat ----------------------")
arr = [1,2,["a","b"]];
console.log(arr);
res = arr.flat();
console.log(res);

arr = [1,2,["a","b",["qw",[11,22,33],"qa","qe"]]];
console.log(arr);
res = arr.flat(2);
console.log(res);

/////

console.log("------------- flatMap ( map + flat(1) ) ----------------------");
arr = ["hello ", "java script"];     // [ [h,e,l,l,o, ]  [j,a,v,a, ,s,c,r,i,p,t]       ]
res = arr.flatMap(str=>str.split(""));
console.log(arr);
console.log(res);


arr = "hello java script".split(" ");
console.log(arr);

arr = arr.map(el=>el.split("") );  //
console.log(arr);                   //
                                    //  flatMap()
arr = arr.flat(1);                  //
console.log(arr);                   //


