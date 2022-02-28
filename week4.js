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

class Department {
    constructor(name) {
        this.name = name;
        this.vehicles = [];
    }
    addVehicle(vehicle) {
    if (vehicle instanceof Vehicle) {
       this.vehicles.push(vehicle);     
    } else {
        throw new Error ('not an instance of vehicle')
    }
} 
describe(){
return `${this.name} has ${this.vehicles.length} vehicles.`
   } 
}

class Menu {
    constructor(){
        this.department = [];
        this.selectedDepartment = null;
    }
    start(){
        let selction = this.showMainMenuOptions();
        
    }
}