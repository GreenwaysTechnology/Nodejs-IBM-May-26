
function getValue() {
    return Promise.reject('oops!')
}
async function main() {
    try {
        const value = await getValue();

        console.log(value)
    }
    catch (err) {
        console.log(err)
    }
}
main()