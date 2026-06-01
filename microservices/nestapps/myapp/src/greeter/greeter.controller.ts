import { Controller, Get } from "@nestjs/common";
import { GreeterService } from "./greeter.service";

@Controller('greeter')
export class GreeterController {
    constructor(private readonly greeterService: GreeterService) { }

    //apis
    @Get('hello')
    getHello(): string {
        return this.greeterService.sayHello();
    }
    @Get('hai')
    getHai(): string {
        return this.greeterService.sayHai();
    }
    @Get('greet')
    getGreet(): string {
        return this.greeterService.sayGreet();
    }
}