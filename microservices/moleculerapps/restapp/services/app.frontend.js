const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: 'TCP'
})

broker.createService({
    name: 'products',
    actions: {
        list: {
            rest: "GET /",
            async handler(ctx) {
                const products = await ctx.call('productservice.findAll')
                return products
            }
        },
        get: {
            rest: "GET /:id",
            async handler(ctx) {
                const { id } = ctx.params
                const product = await ctx.call('productservice.findById', { id: id })
                return product
                
            }
        },
        create: {
            rest: "POST /",
            handler(ctx) {
                const payload = ctx.params
                console.log(payload)
                return 'Post  Products'
            }
        },
        update: {
            rest: "PUT /:id",
            handler(ctx) {
                return 'Update all Products'
            }
        },
        remove: {
            rest: "DELETE /:id",
            handler(ctx) {
                return 'Remove  Products'
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