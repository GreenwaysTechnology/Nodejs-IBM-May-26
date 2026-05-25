
class UserAccount {
    private userName: string = "admin"
    private password: string = "admin"

    private auth(){
        return true 
    }
    //public method through which access
    public getUserAccountInfo() {
        this.auth()
        return this.userName + this.password
    }
}

function main() {
    let userAccount = new UserAccount()
    //  userAccount.userName = "test"
    // userAccount.password = "pass"

    console.log(userAccount.getUserAccountInfo())
    //console.log(userAccount.auth())
}
main()