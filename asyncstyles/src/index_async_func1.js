
async function getValue() {
    return 10 //Promise.resolve(10)
}


function getValue1() {
    return Promise.resolve(10)
}
function main() {
    console.log(getValue())
    console.log(getValue1())

}
main()