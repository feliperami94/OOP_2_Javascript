const juan = {
    name: "Pepito",
    age: 20,
    approvedCourses: ["Curso 1"],
    addCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestres",
    writable: false,
    enumerable: false,
    configurable: false
})

Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    writable: true,
    enumerable: false,
    configurable: true
})

Object.defineProperty(juan, "editor", {
    value: "VSCode",
    writable: false,
    enumerable: true,
    configurable: true
})

Object.defineProperty(juan, "terminal", {
    value: "WSL",
    writable: true,
    enumerable: true,
    configurable: false
})

Object.seal(juan); //Puts all the configurable attributes in the properties as false

Object.freeze(juan); //Puts all the configurable and writable attributes in the properties as false

console.log(Object.getOwnPropertyDescriptors(juan));