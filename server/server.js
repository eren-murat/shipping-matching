const express       = require('express');
const cors          = require('cors');
const dbOperation   = require('./db_files/dbOperation');


const app = express();

app.use(cors());

app.get('/offers', (req, res) => {
    dbOperation.getOffers()
    .then(response => {
        res.send(response.recordset);
    })
})

app.get('/requests', (req, res) => {
    dbOperation.getRequests()
    .then(response => {
        res.send(response.recordset);
    })
})


app.listen(4000, () => {
    console.log('Running on port 4000')
})