const storage = require('node-persist'); 
const uuid = require('uuid');
(async()=>{  await storage.init({dir:'./data'});  })(); 

module.exports.getBooks = async(request, response)=>{
 
    let books = await storage.valuesWithKeyMatch(/book-/); 
    response.status(200); 
    response.json(books); 
}

module.exports.postBook = async(request, response)=>{

    try{
        let book = {id:uuid.v4(),created:new Date().toISOString().slice(0,10),...request.body};
        await storage.setItem(`book-${book.id}`,book); 
        response.status(201); 
        response.json(book); 
    }
    catch(error){
        response.status(500);
        response.json({error:error.message}); 
    }  
}