/**
 * Functions
 */

function addFunction(x:number, y:number) :number {
    return x + y;
}


function addToHello(name : string) : string{
    return `Hello ${name}!`
}
let soma:number = addFunction(4, 7)
console.log(addToHello('Caio'))


function callToPhone(phone : number | string){
    return phone;
}
console.log(callToPhone(1231231231))

async function getDatabase(id : number) : Promise<Number|String> {
    return "Caio"
}
