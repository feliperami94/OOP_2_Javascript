const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d", e: "e"
    },
    editA() {
        this.a = "AAAAAAAA";
    }
};

//Deep copy con funciones recursivas

function isObject(subject) {
    if (typeof subject == "object") {
        return true
    } else {
        return false
    }
}
function isArray(subject) {
    if (Array.isArray(subject)) {
        return true
    } else {
        return false
    }
    
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);
        const keyIsArray = isArray(subject[key]);
        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else if (subjectIsArray) {
            copySubject.push(subject[key]);
        } else {
            copySubject[key] = subject[key];
        }
    }
    

    return copySubject;
}