const express       = require('express');
const cors          = require('cors');
const dbOperation   = require('./db_files/dbOperation');


const app = express();

app.use(cors());

app.get('/trucks', (req, res) => {
    dbOperation.getTrucks()
    .then(response => {
        res.send(response.recordset);
    })
})

app.get('/goods', (req, res) => {
    res.send('list of the goods')
})


app.listen(4000, () => {
    console.log('Running on port 4000')
})