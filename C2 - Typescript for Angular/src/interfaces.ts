/**
 * Interfaces (Type x Interface)
 */

//used to give a type to a set or an object
type Robot = {
    readonly id : number | string
    name : string
    sayHello(): string

}

//more used with classes
interface robot2 {
    readonly id : number | string,
    name : string
    sayHello():string
}

const bot : Robot = {
    id: 1,
    name: "Megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.")
    }
}

const bot2 : robot2 ={
    id: 1,
    name: "Megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.")
    }
}

console.log(bot)
console.log(bot2)

class Person implements robot2{
    id:string|number
    name: string

    constructor(id:string|number, name:string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `Hello, I'm ${this.name}`
    }
}

const person = new Person(1, "Caio")
console.log(person.sayHello())
