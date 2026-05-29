const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: 'TCP'
})

broker.createService({
    name: 'productservice',
    actions: {
        findAll: {
            async handler(ctx) {
                const products = await fetch('https://dummyjson.com/products')
                const productsJson = await products.json()
                return productsJson
            }
        },
        findById: {
            async handler(ctx) {
                const id = Number(ctx.params.id)
                const url = `https://dummyjson.com/products/${id}`
                const response = await fetch(url)
                const product = await response.json()
                return product
            }
        }
    }
})



async function main() {
    try {
        await broker.start()
    }
    catch (err) {
        console.log(err)
    }
}
main()