//has -a

class Address {
    constructor(public city: string = "city", public state: string = "state") { }
}

class Employee {
    constructor(public id: string = "0", public name: string = "name", private address: Address) {

    }
}
function main() {
    let emp = new Employee("1", "Subramanian", new Address("Coimbatore", "TN"))
    console.log(emp)
}
main()