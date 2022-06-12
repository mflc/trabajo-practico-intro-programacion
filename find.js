const read = require('./CRUD/read.js');
const write = require('./CRUD/write.js');



function filter(param) {
    let books = read();
    
    let result = books.filter((book) => book.title.toLowerCase().startsWith(param.toLowerCase()))
      if(result.length == 0){
         return console.log('No hay resultados')
      }
       return console.log(result)
      
    
  }
    
  
  module.exports = filter;
