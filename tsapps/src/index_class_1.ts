
class Employee {
    //instance variables
    id: number = 1
    name: string = "Subramnaian"
    isActive: boolean = true

    calculate(value:number):void {
        console.log(value)
    }

}
function main(){
    //let emp:Employee = new Employee()
    let emp = new Employee()
    console.log(emp.id,emp.name,emp.isActive)
    //emp.id ="122"
    emp.calculate(122)
     
}
main()