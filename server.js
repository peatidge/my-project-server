const express = require('express');
const bodyParser = require('body-parser');
const bookController = require('./controllers/bookController'); 

let app = express();
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));                                                
app.use(bodyParser.json()); 

app.route('/books')
    .get(bookController.getBooks)
    .post(bookController.postBook); 
    
app.listen(4000,()=>{}); 

module.exports = app; 