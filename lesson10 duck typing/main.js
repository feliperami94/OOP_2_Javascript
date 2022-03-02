function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}

function createLearningPath({
    name = requiredParam("name"),
    courses = [],
}) {
    const private = {
        "_name": name,
        "_courses": courses,
    };

    const public = {
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if (newName.length != 0) {
                private["_name"] = newName
            } else {
                console.warn("El nombre del Learning Path debe tener algun caracter")
            }
        },
        get courses() {
            return private["_courses"];
        } }
    }

    

function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    github,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    const private = {
        "_name": name,
        "_learningPaths": learningPaths,
    };
    const public = {
        email,
        age,
        twitter,
        instagram,
        github,
        approvedCourses,
        get name() {
            return private["_name"];
        },
        set name(newName) {
            if (newName.length != 0) {
                private["_name"] = newName
            } else {
                console.warn("Tu nombre debe tener algun caracter")
            }
        },
        get learningPaths() {
            return private["_learningPaths"];
        },
        set learningPaths(newLP) {
            if (!newLP.name) {
                console.warn("Tu LP no tiene la propiedad Name");
                return;
            } 

            if (!newLP.courses) {
                console.warn("Tu LP no tiene courses");
                return;
            }

            if (!Array.isArray(newLP.courses)) {
                console.warn("Tu LP no es una lista de cursos");
                return;
            }

            private["_learningPaths"].push(newLP);
        }

    }
    Object.defineProperty(public, "readName", {
        writable: false,
        configurable: false,
    })
    return public;

}

const juan = createStudent({name: "Juan", email: "chuchito@gmail.com"});