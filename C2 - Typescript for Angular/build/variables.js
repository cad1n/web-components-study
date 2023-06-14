"use strict";
/**
 * Variables
 */
// primitive types: boolean, number, string
let on = true;
let nameVar = "Caio";
let numberVar = 23;
//Special types
//null variable
let nullVar = null;
//undefined
let undefinedVar = undefined;
//void
let voidVar; //When you want to execute a query or do a quick behavior evaluation of your system
//any
let returnView = "When you have a function that returns an unpredictable value";
/**
 * Objects
 */
// non predictable and non typed object declaration
let objectTest = {
    name: "Caio",
    city: "João Pessoa",
    age: 20
};
let myProduct = {
    name: "Blu-ray film",
    price: 49.90,
    units: 1
};
/**
 * Arrays
 */
//standart array declaration
let data = ["Cat", "Dog", "Horse"];
let secondData = ["Cat", "Dog", "Horse"];
//multitypes array declaration
let arrayTest = ["Cat", "Dog", 4500, 2003];
//tuples
let billet = ["Water", 199.90, 0.32];
//method arrays
data.pop();
/**
 * Date
 */
let anniversary = new Date("2022-12-01 00:00");
console.log(anniversary.toString());
