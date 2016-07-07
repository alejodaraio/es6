let Bird = require("./Bird");


class Duck extends Bird {

    constructor(name, lastname) {
        super(name);

        this._lastName = lastname;
    }

    getFullName() {
        return this.getName() + ", " + this._lastName;
    }
}

module.exports = Duck;