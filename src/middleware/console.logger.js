const consoleLogger = (req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`)
    console.log(`Body: ${JSON.stringify(req.body)}`)
    console.log(`Query: ${JSON.stringify(req.query)}`)
    next()
}

export default consoleLogger
