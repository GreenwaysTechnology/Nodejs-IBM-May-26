abstract class Animal {
    abstract eat(): void
    saveAnimals() {
        console.log('save Animals')
    }
}
class Lion extends Animal {
    eat(): void {
        console.log('Lion eats!!')
    }
}
class Tiger extends Animal {
    eat(): void {
        console.log ('tiger hunts other animals')
    }
}
let animal = new Lion()
animal.eat()
animal.saveAnimals()

animal = new Tiger()
animal.eat()
animal.saveAnimals()