const fs = require('fs');



const write = (libros) => {
    return fs.writeFileSync('books.json', JSON.stringify(libros, null, 4))
}

module.exports = write;

