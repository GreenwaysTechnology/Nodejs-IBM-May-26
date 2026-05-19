
async function getValue() {
    return 10 //Promise.resolve(10)
}


function getValue1() {
    return Promise.resolve(10)
}
async function main() {
//    getValue().then(value=>console.log(value))
//    getValue1().then(value=>console.log(value))

 const value = await getValue();
 console.log(value)
}
main()