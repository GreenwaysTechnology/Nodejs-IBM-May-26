const TODOS = require('../mock-data/todos')

class TodoService {
    constructor() {

    }
    findAll() {
        //  return TODOS    
        return new Promise((resolve, reject) => {
            setTimeout(resolve,2000,TODOS)
        })
    }
}
module.exports = new TodoService()