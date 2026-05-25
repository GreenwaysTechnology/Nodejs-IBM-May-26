class TodoService {
    constructor() {

    }
    findAll() {
        return "findAll todos"
    }
}
class TodoController {
    //dependency injection
    constructor(private todoService: TodoService) { }
    findAll() {
        return this.todoService.findAll()
    }
}

function main() {
    let todoControler = new TodoController(new TodoService())
    console.log(todoControler.findAll())
}
main()