function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}

function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    github,
    approvedCourses = [],
    LearningPaths = [],
} = {}) {
    const private = {
        "_name": name,
    };
    const public = {
        email,
        age,
        twitter,
        instagram,
        github,
        approvedCourses,
        LearningPaths,
        get name() {
            return private["_name"];
        }
        set name(newName) {
            if (newName.length != 0) {
                private["_name"] = newName
            } else {
                console.warn("Tu nombre debe tener algun caracter")
            }
        }
    }
    Object.defineProperty(public, "readName", {
        writable: false,
        configurable: false,
    })
    return public;

}

const juan = createStudent({name: "Juan", email: "chuchito@gmail.com"});