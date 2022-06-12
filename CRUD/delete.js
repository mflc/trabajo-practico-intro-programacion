const read = require('../CRUD/read.js');
const write = require('../CRUD/write.js');



const del = (id) => {
    let books = read();
    for (let i = 0; i < books.length; i++) {
        if (books[i].id == id) {
            var titleADel = i
        }
    }

    if (isNaN(id) || id < 0) {
        return console.log('No es un numero valido')
    }
    write(books.filter((items,) => (items.id != id)))

    if (titleADel == undefined) {
        return console.log('No existen libros para eliminar')
    }
    let title = books[titleADel].title
    return console.log(`Se elimino el libro ${title}`)
}


module.exports = del;






