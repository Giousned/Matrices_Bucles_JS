let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let tipoarr = [];

for (let i=0;i<mix.length;i++){
        const tipovalor= mix[i];
        tipoarr.push(typeof tipovalor);
}

console.log(tipoarr);