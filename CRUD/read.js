const fs = require('fs');


const read = () => {
    if (fs.existsSync('books.json') == false) {
        return fs.writeFileSync('books.json', JSON.stringify([], null, 4))
    }
    return JSON.parse(fs.readFileSync('books.json', 'utf-8'))
}

module.exports = read;

