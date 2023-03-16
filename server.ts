
const server = require('./src/routes/router')()
server.listen({ port: 8080 }, () => {
  console.log(`Server listening at 8080`)
})
