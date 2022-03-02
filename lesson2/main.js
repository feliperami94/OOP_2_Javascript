//Trying to copy the content from obj1
const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d", e: "e"
    }
};

const objcopia = obj1; //Don't work, it's copying just the pointer from obj1

const obj2 = {}; 
for(prop in obj1) { //Don't work, it's copying element by element, but when obj1 has an internal object, it's copying it's pointer.
    obj2[prop] = obj1[prop]
}

const obj3 = Object.assign({}, obj1); //It's doing the same as copying the pointer.

const obj4 = Object.create(obj1); //Copy the pointer from obj1 to the proto properties of obj4. When re-assigning a property value, it assign the new property out of the proto properties. You can re-assign properties in the new object but doing the same in old the original object will change the values in proto for the new object. Don't work well when having nested objects