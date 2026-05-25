
//target:object,propertyKey = method name, descriptor=Method meta data
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        //log 
        console.log("Method Name :", propertyKey)
        console.log("Arguments:", args)
        const result = originalMethod.apply(this, args)
        console.log("Method finished")
        return result;
    }

}
class Dog {
    @Log 
    eat(){
        console.log('dog eats')
    }
}


class Calculator {

    @Log
    add(a: number, b: number) {
        return a + b
    }
}
let calc = new Calculator()
console.log("Result :", calc.add(1, 2))

let dog = new Dog()
dog.eat()