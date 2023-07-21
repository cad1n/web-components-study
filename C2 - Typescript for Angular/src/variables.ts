/**
 * Variables
 */

// primitive types: boolean, number, string

let on: boolean = true
let nameVar: string = "Caio"
let numberVar: number = 23

//Special types

//null variable
let nullVar : null = null

//undefined
let undefinedVar : undefined = undefined

//void
let voidVar : void //When you want to execute a query or do a quick behavior evaluation of your system

//any
let returnView : any = "When you have a function that returns an unpredictable value"

/**
 * Objects
 */

// non-predictable and non typed object declaration
let objectTest : object = {
    name: "Caio",
    city: "João Pessoa",
    age: 20
}

// typed object declaration, more structured and predictable
type storeProduct = {
    name: string,
    price: number,
    units: number
}

let myProduct: storeProduct = {
    name: "Blu-ray film",
    price: 49.90,
    units: 1
}

/**
 * Arrays
 */

//standard array declaration

let data: string[] = ["Cat", "Dog", "Horse"]
let secondData: Array<String> = ["Cat", "Dog", "Horse"]

//multi-types array declaration
let arrayTest: (string|number)[] = ["Cat", "Dog", 4500, 2003]

//tuples

let billet: [string, number, number] =["Water", 199.90, 0.32] 

//method arrays
data.pop();

/**
 * Date
 */

let anniversary : Date = new Date("2022-12-01 00:00")
console.log(anniversary.toString())
