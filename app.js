// Task 1
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
        console.log("Energy is increasing, currently at: ", this.energy);
    }
    doSomethingFun() {
        this.energy -= 10;
        console.log("Energy is decreasing, currently at: ", this.energy);
    }
}
// Task 2
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log("Experience is increasing, current: ", this.xp);
    }
}
// Task 3
function intern() {
    let newIntern = new Worker("Bob", 21, 110, 0, 10);
    newIntern.goToWork();
    return newIntern;
}
intern();
// Task 4
function manager() {
    let newManager = new Worker("Alice", 30, 120, 100, 30);
    newManager.doSomethingFun();
    return newManager;
}
manager();