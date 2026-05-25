
//union type
let a: number | string | undefined | null

a = 10
a = "30"
a = undefined
a = null
//a = true

//union values
let gender: "Male" | "Female" | "Third"

gender = "Male"
gender = "Female"
gender = "Third"
//gender = "test"

let windowStatus: "Open" | "Close"
windowStatus = "Open"

function Mode(varient: "dark" | "light" = "dark") {
    console.log(varient)
}
Mode("dark")
Mode("light")
Mode()
// Mode("theme")

