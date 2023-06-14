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
    private name? : String
    protected strength: String|Number
    skill: String

    constructor(name:String, strength:String|Number, skill:String){
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
    magicPoints:Number
    constructor(name:String, strength:String|Number, skill:String, magicPoints:Number){
        super(name, strength, skill);
        this.magicPoints = magicPoints
    }
}

const c1 = new Character("Goku", 8000, "Kamehameha")
const c2 = new Magician("Mage", 15000, "Fus Roh Dah", 30000)
c1.attack()
c2.attack()
