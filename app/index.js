
// const pico = require('picocolors')
const express = require('express');
const cors = require('cors')
const countries = require('./data/data.json')
const app = express();

app.disable('x-powered-by')

const whiteList = ['http://localhost' ]
const PORT = process.env.PORT ?? 3000;

app.use(cors({
    origin:whiteList
}))

app.get('/countries', (req, res) => {
    res.json(countries);
});

app.get('/countries/:name', (req, res)=>{

    let name = req.params.name;

    countries.map( country => {
        if (country.name == name) {
            res.json(country)
        }
    } );

});

app.use((req, res)=>{
    res.status(404).send('<h1>404 not found<h1>')
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}! http://localhost:${PORT}/`));