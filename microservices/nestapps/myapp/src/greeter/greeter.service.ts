import { Injectable } from "@nestjs/common";

@Injectable()
export class GreeterService {

    sayHai(): string {
        return "Greeter - Hai"
    }
    sayHello(): string {
        return "Greeter -Hello"
    }
    sayGreet(): string {
        return "Greeter - Greet"
    }
}