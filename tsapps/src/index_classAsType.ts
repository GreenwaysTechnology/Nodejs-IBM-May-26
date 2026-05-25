
//class As type
class User {
    id: number = 0
    name: string = ""
    isActive?: boolean = false //optional values/variables
    city?: string = "city"
    gender?: "Male" | "Female" | "Third"
}

function main() {
    // let user: User = {
    //     id: 1,
    //     name: 'Subramanian Murugan',
    //     isActive: true,
    //     city: 'Coimbatore'
    // }
    let user: User = {
        id: 1,
        name: 'Subramanian Murugan',
        // isActive: true,
        // city: 'Coimbatore'
        gender:"Male"
    }

}
main()