let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here

/* 
let resultingNames = allNames.filter(function(el){
        return allNames.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
        })
      }
});
*/

let resultingNames = allNames.filter(function(names){
    if (names.startsWith('R')==true) return (allNames)
  });


console.log(resultingNames);
