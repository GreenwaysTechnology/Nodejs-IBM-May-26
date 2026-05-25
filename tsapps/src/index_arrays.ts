let list = [1, "hello", true]

//syntax - 1 no generics syntax
//let numberList:number [] = [1,2,3,"test"]

//syntax-2 : generics syntax <Type>

let numberList: Array<number> = [1, 2, 3, 4, 5]

function getList(): Array<number> {
    return [1, 2, 3, 4, 5, 6]
}
function getNumList(): number[] {
    return [1, 2, 3, 4, 5, 6]
}
class Employee {
    id?: number
    name?: string
}

// let employees: Array<Employee> = [{
//     id: 1,
//     name: 'A'
// }]

let employees: Employee[] = [{
    id: 1,
    name: 'A'
}]