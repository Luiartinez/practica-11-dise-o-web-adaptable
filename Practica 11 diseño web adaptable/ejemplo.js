//funcion que combina multiples listas y elimina duplicados
function mezclarlistas (...listas){
    //lismas spread para aplanar las listas  y para eliminar duplicados
    let combinadassinduplicados = [...new Set([].concat(...listas))];
    return combinadassinduplicados;
}

let lista1 = [1,2,3];

let lista2 = [4,5,6];

let lista3 = [7,8,9];

//pasamos varias matrices
console.log(mezclarlistas(lista1,lista2,lista3));