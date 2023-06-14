/**
 * Classes
 */

/*
Data modifiers
public
private
protected
*/ 

class Character{
    private name? : string
    protected strength: string|number
    skill: string

    constructor(name:string, strength:string|number, skill:string){
        this.name = name
        this.strength = strength
        this.skill = skill
    }

    attack() : void{
        console.log(`Attack with ${this.skill}. ${this.strength} points inflicted`)
    }
}

//child class
class Magician extends Character{
    magicPoints:number
    constructor(name:string, strength:string|number, skill:string, magicPoints:number){
        super(name, strength, skill);
        this.magicPoints = magicPoints
    }
}

const c1 = new Character("Goku", 8000, "Kamehameha")
const c2 = new Magician("Mage", 15000, "Fus Roh Dah", 30000)
c1.attack()
c2.attack()
