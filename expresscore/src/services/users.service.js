const USERS = require("../mock-data/users")

class UserService {

    findAll() {
        return Promise.resolve(USERS)
    }
}
module.exports = new UserService()