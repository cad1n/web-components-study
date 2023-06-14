"use strict";
/**
 * Classes
 */
/*
Data modifiers
public
private
protected
*/
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.skill}. ${this.strength} points inflicted`);
    }
}
//child class
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const c1 = new Character("Goku", 8000, "Kamehameha");
const c2 = new Magician("Mage", 15000, "Fus Roh Dah", 30000);
c1.attack();
c2.attack();
