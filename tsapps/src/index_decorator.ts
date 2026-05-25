
//decorator
function Course(target: any) {
    //decorator logic
    //inject course information 
    Object.defineProperty(target.prototype, 'subject', { value: 'Typescript' })
}

//how to attach decorator

@Course //binding Course Decorator
class Student {
    constructor(public id: number, public name: string) { }
}
let student = new Student(1,"Subramanian") as any 
console.log(`${student.name} learning ${student.subject}`)