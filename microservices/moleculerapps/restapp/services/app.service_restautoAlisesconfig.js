const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    serializer: "JSON" // not necessary to set, because it is the default
})

broker.createService({
    name: 'products',
    actions: {
        list: {
            rest: "GET /",
            handler(ctx) {
                return 'Get all Products'
            }
        },
        get: {
            rest: "GET /:id",
            handler(ctx) {
                const id = ctx.params.id
                console.log(id)
                return 'Get Products By Id'
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
broker.createService({
    name: 'customers',
    actions: {
        list: {
            handler(ctx) {
                return 'Get all customers'
            }
        },
        get: {
            handler(ctx) {
                const params = ctx.params
                console.log(params)
                return 'Get customers By Id ' + params.id
            }
        },
        create: {
            handler(ctx) {
                const payload = ctx.params
                console.log(payload)
                return 'Post  customers'
            }
        },
        update: {
            handler(ctx) {
                return 'Update customers'
            }
        },
        remove: {
            handler(ctx) {
                return 'Remove  customers'
            }
        }
    }
})

broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api',
                aliases: {
                    "REST customers": "customers"
                },
                autoAliases: true
            }
        ]
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