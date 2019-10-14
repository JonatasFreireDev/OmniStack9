const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb://omini:omini@cluster0-shard-00-00-4fphi.mongodb.net:27017,cluster0-shard-00-01-4fphi.mongodb.net:27017,cluster0-shard-00-02-4fphi.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//req.query = acessar query parms
//req.parms = acessar route params (edição delete)
//req.body = acessar corpo da requisição (criaçao e ediçao)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);