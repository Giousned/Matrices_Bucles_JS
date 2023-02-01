let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below

function deletePerson(eliminar){
    let newArray = people.filter((element) => element !== eliminar);
    return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
