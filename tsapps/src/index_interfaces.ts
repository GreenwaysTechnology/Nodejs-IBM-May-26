interface Fly {
    fly():void
}
class Bird implements Fly {
    fly(): void {
        console.log('Bird flies')
    }
}
class AirPlan implements Fly {
    fly(): void {
        console.log('AirPlan flies')
    }
}
let flyable = new Bird()
flyable.fly()

flyable = new AirPlan()
flyable.fly()