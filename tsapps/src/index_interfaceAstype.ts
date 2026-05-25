
//class As type
interface User {
    id: number
    name: string
    isActive?: boolean
    city?: string
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
        gender: "Male"
    }

}
main()