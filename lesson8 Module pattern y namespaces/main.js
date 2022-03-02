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
        changeName(newName) {
            private["_name"] = newName;
        },
        readName() {
            return private["_name"];
        }
    }
    Object.defineProperty(public, "readName", {
        writable: false,
        configurable: false,
    })
    return public;

}

const juan = createStudent({name: "Juan", email: "chuchito@gmail.com"});