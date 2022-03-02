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
    return {
        name,
        email,
        age,
        twitter,
        instagram,
        github,
        approvedCourses,
        LearningPaths
    }

}

const juan = createStudent({name: "Juan", email: "chuchito@gmail.com"});