const write = require('./write.js');
const read = require('./read.js');


const update = (id, title, author, genre, year, cost, price) => {
      let books = read();
      if (isNaN(id) || id < 0) {
        return console.log('No Es Un Id Valido')
      }

      let editBook = books.map((items) => {
      if (items.id == id) {
        items.title = title;
        items.author = author;
        items.genre = genre;
        items.year = Number(year);
        items.cost = Number(cost);
        items.price = Number(price);
      }
        return items
    })
  
        write(editBook);
        console.log(`se actualizaron lo datos del ID: ${id} ${title}`)
}
  
  
  module.exports = update;








