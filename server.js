const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')
const app = express()

constRollbar = require('rollbar')

let rollbar = new Rollbar({
  accessToken: "5b23a0aec9ae427db1a3d6da67dfd333",
  captureUncaught: true,
  captureUnhandledRejections: true
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})

const port = process.env.PORT || 4545
app.listen(port, () => console.log(`take us to warp ${port} !`))
