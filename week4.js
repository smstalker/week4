//This app will enable users to track vehicles in a fleet program 

class Vehicle {
    constructor(year, model){
        this.year = year;
        this.model = model;
    }

    describe() {
        return`${this.model} was made in ${this.year}.`
    }
}
