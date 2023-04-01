const express = require('express')

//rest object
const app = express()

//rest api
app.get('/',(req,res) => {
    res.send({
        message:'Welcome to Ecommerce App'
    })
})

//PORT
const PORT = 4444

//run listen
app.listen(PORT, () => {
    console.log(`Server : Running on ${PORT}`)
})