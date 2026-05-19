// const TodoService  =require('./services/todo.service')
const { findAll } = require('./services/todo.service')

function main() {
    // const todoService = new TodoService()
    console.log(findAll())
}
main()
