const express = require('express')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const reqPromise = require('request-promise')
const path = require('path')

const app = express()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

let searchObj = {}

app.use(express.static('public'))

app.post('/theaters', urlencodedParser, (req, res) => {
    console.log(req.body.zipcode)
    searchObj = { 
        zipcode: req.body.zipcode,
        date: req.body.date,
        radius: req.body.radius
    }
    res.sendFile(path.join(__dirname, 'public', 'theaters.html'))
})

app.get('/location', (req, res) => res.json(searchObj))


app.get('/getData', (req, res) => {
    const date = searchObj.date
    const zip = searchObj.zipcode
    reqPromise('http://data.tmsapi.com/v1.1/movies/showings?startDate=' + date + '&zip=' + zip + '&api_key=8dyfezutfxys5435q4ehcqkp')
    .then((response) => {
        res.json(response)
    }).catch((err) => {
        console.error(err)
    })
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))