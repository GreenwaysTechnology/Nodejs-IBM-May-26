import { name } from "./lib.js";
import TodoService from "./services/todo.service.js";

function main(){
    console.log(name)
    let todoService = new TodoService()
    console.log(todoService.findAll())
}
main()