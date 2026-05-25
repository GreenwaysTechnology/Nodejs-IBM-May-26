
class Employee {
    //convert local variables into private variables , by adding private keyword or public keyword
    // constructor(public id: number = 1,public name: string = "name", public isActive: boolean = false) {
    //     //instance variable = localvariable
    //     this.id = id
    //     this.name = name;
    //     this.isActive = isActive
    // }
    constructor(public id: number = 1, public name: string = "name", public isActive: boolean = false) {}

}
function main() {
    //let emp:Employee = new Employee()
    let emp = new Employee(2, "Ram", false)
    console.log(emp.id, emp.name, emp.isActive)

    emp = new Employee()
    console.log(emp.id, emp.name, emp.isActive)
}
main()