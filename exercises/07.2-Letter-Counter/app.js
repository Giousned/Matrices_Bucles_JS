let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts={};

// your code here

const letras = [];

for(let i of par){
    const letter = i.toLowerCase();
    
    if(letter == " ") continue;
    else if(counts[letter] == undefined){
                counts[letter] = 1;
    } 
    else{
                counts[letter] = counts[letter] + 1;
            }
}

console.log(counts);

/* OTRA SOLUCION
for(let i in par){
    const letter = par[i].toLowerCase();
    
    if(letter == " ") continue;
    else if(counts[letter] == undefined){
                counts[letter] = 1;
    } 
    else{
                counts[letter] = counts[letter] + 1;
            }
}

console.log(counts);
*/