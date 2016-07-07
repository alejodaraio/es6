
let Duck = require("./Duck");
let Eagle = require("./Eagle");

class BirdFactory {

    constructor(bird) {

        if(bird instanceof Duck) {
            console.log("this Bird is a Duck");
        }

        if(bird instanceof Eagle) {
            console.log("this Bird is a Eagle");
        }
    }
}

module.exports =  BirdFactory;