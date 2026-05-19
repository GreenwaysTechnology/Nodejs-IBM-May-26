const TodoService  =require('./services/todo.service')

function main(){
    const todoService = new TodoService()
    console.log(todoService.findAll())
}
main()
