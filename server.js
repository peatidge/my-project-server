const express = require('express');
const bodyParser = require('body-parser');
const bookController = require('./controllers/bookController'); 

let server = express();
server.use(bodyParser.json());                                                                                  
server.use(express.json()); 

server.route('/books')
    .get(bookController.getBooks)
    .post(bookController.postBook)
    .put(bookController.putBook); 
    
server.listen(4000,()=>{}); 

module.exports = server; 

//this is a change in the master branch
//this is a change in the other branch
