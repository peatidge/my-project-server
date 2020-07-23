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
//oops I meant for this to be part of the last commit
