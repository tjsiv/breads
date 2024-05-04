// DEPENDENCIES
const express = require('express');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// ROUTES
app.get('/', (req,res) =>{
    res.send('Welcome to an awsome App about Breads!');
});

//BREADS
const breadsController = require('./controllers/breads_controllers');
app.use('/breads', breadsController);

// LISTEN
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});
