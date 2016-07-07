/**
 * Created by alexo on 06/07/16.
 */

let BirdFactory = require("./BirdFactory");
let Duck = require("./Duck");
let Eagle = require("./Eagle");

let myDuck = new Duck("Micke", "Donal");
let myEagle = new Eagle("Eagle", "Giant");


console.log(myDuck.getName());
console.log(myDuck.getFullName());

console.log("######################");


let whatIs = new BirdFactory(myEagle);