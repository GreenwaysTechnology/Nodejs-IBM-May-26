
class Employee {
    //instance variables
    id: number
    name: string
    isActive: boolean
    constructor(id: number = 1, name: string = "name", isActive: boolean = false) {
        this.id = id
        this.name = name;
        this.isActive = isActive
    }

}
function main() {
    //let emp:Employee = new Employee()
    let emp = new Employee(2, "Ram", false)
    console.log(emp.id, emp.name, emp.isActive)

    emp = new Employee()
    console.log(emp.id, emp.name, emp.isActive)
}
main()