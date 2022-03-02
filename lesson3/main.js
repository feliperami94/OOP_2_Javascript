//Using JSON.stringify and JSON.parse to copy objects
const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d", e: "e"
    }
};

const stringifiedComplexObj = JSON.stringify(obj1); //Returns a string with all the properties and subproperties of obj1.

const obj2 = JSON.parse(stringifiedComplexObj);