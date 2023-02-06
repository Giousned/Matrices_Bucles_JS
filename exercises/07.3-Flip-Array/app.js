let arr = [45,67,87,23,5,32,60];

//Your code here.
let arrinv = [];

arrinv = arr.reverse();

console.log(arrinv);

/* OTRA SOLUCION
let arrinv = []

for (let i=arr.length-1;i>=0;i--){
    arrinv.push(arr[i]);
}

console.log(arrinv);
*/


/* SOLUCION DADA
let arr = [45,67,87,23,5,32,60];

//Your code here.
let flippedArray = []
for(let i = arr.length - 1; i>= 0;i--){
    let item = arr[i];
    flippedArray.push(item);
}
console.log(flippedArray)
*/