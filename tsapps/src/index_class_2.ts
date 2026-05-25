
class Employee {
    //instance variables
    id: number = 1
    name: string = "Subramnaian"
    isActive: boolean = true
    constructor(id: number, name: string, isActive: boolean) {
        this.id = id
        this.name = name;
        this.isActive = isActive
    }

}
function main() {
    //let emp:Employee = new Employee()
    let emp = new Employee(2,"Ram",false)
    console.log(emp.id, emp.name, emp.isActive)

}
main()