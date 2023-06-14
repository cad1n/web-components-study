/**
 * Interfaces (Type x Interface)
 */

//used to give a type to a set or an object
type Robot = {
    readonly id : Number | String
    name : String
    sayHello(): String

}

//more used with classes
interface robot2 {
    readonly id : Number | String,
    name : String
    sayHello():String
}

const bot : Robot = {
    id: 1,
    name: "Megaman",
    sayHello: function (): String {
        throw new Error("Function not implemented.")
    }
}

const bot2 : robot2 ={
    id: 1,
    name: "Megaman",
    sayHello: function (): String {
        throw new Error("Function not implemented.")
    }
}

console.log(bot)
console.log(bot2)

class Person implements robot2{
    id:String|Number
    name: String

    constructor(id:String|Number, name:String){
        this.id = id
        this.name = name
    }
    sayHello(): String {
        return `Hello, I'm ${this.name}`
    }
}

const person = new Person(1, "Caio")
console.log(person.sayHello())
