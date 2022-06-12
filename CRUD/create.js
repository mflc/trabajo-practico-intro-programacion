
const write = require('./write.js');
const read = require('./read.js');
const normalize = require('../normalize.js');




const carga = (title, author, genre, year, cost, price) => {
    let books = read();
    let end = books[books.length - 1];
    let newobj = {
        id: books.length > 0 ? end.id + 1 : 1,
        title: title,
        author: author,
        genre: genre,
        year: Number(year),
        cost: Number(cost),
        price: Number(price)
    };
    books.push(newobj);

    write(books);
    console.log(`Se agrego el nuevo libro ${title}`);
}

module.exports = carga;




