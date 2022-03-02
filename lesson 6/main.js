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

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        github: undefined
    }

}

const juan = deepCopy(studentBase);
Object.defineProperty(juan, "name", {
    value: "Juanito",
    configurable: false, //You can do this or Object.seal(object_name)
})
Object.seal(juan);
