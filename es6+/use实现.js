const app = {
    middlewares: [],

    callback(ctx) {
        console.log(ctx)
    },
    use(fn) {
        // console.log(fn);
        app.middlewares.push(fn)

    },
    go(ctx) {
        // console.log(ctx);
        // app.middlewares.reduceRight((res, fn) => () => fn(ctx, res), () => app.callback(ctx))()
        app.middlewares.reduceRight((res, fn) => () => fn(ctx, res), () => app.callback(ctx))()

    }
}

app.use((ctx, next) => {

    ctx.name = 'Lucy'
    next()
})

app.use((ctx, next) => {
    ctx.age = 12
    next()
})

app.use((ctx, next) => {
    console.log(`${ctx.name} is ${ctx.age} years old.`)
    next()
})

app.go({})