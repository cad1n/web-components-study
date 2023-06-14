//generics

function concatArray<T>(...itens:T[]) : T[]{
    return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1, 5], [5])
const stringArray = concatArray<string[]>(["James", "Brown"], ["Junior"] )

console.log(numArray)
console.log(stringArray)
