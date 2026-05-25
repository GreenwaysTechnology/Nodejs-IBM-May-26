
//decorator
// function Course(target: any) {
//     //decorator logic
//     //inject course information 
//     Object.defineProperty(target.prototype, 'subject', { value: 'Typescript' })
// }

function Course(courseInfo: string) {
    return function (target: any) {
        Object.defineProperty(target.prototype, 'subject', { value: courseInfo })
    }
}

//how to attach decorator

@Course("Nest") //binding Course Decorator
class Student {
    constructor(public id: number, public name: string) { }
}
let student = new Student(1, "Subramanian") as any
console.log(`${student.name} learning ${student.subject}`)