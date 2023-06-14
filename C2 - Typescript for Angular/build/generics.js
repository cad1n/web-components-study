"use strict";
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [5]);
const stringArray = concatArray(["James", "Brown"], ["Junior"]);
console.log(numArray);
console.log(stringArray);
