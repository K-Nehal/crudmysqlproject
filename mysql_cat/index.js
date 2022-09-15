const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const catRoute = require('./route/cat-route')

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use('/cat', catRoute)

app.listen(port,()=>{
console.log(`port working ${port}`);
})

