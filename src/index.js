const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Tipos de parâmetros:

// Query Params: request.query
// Route Params: request.params
// Body: 

const app = express();

mongoose.connect('mongodb+srv://omnistackroot:omnistackroot@cluster0-wlyeh.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes)

app.listen(3333);