let Bird = require("./Bird");


class Eagle extends Bird {

    constructor(name, lastname) {
        super(name);

        this._lastName = lastname;
    }

    getFullName() {
        return this.getName() + ", " + this._lastName;
    }
}

module.exports = Eagle;