const books = require('./CRUD/read.js');
const edit = require('./CRUD/update.js');
const carga = require('./CRUD/create.js');
const del = require('./CRUD/delete.js');
const normalize = require('./normalize.js');
const filter = require('./find.js');



let value = [process.argv[3],
             process.argv[4],
             process.argv[5],
             process.argv[6],
             process.argv[7],
             process.argv[8]]

let valueDos = [...value ,process.argv[9]]

let action = process.argv[2]

switch (action) {
    case 'new':
        carga(...value)
        break;
    case 'read':
        console.log(books());
        break;
    case 'edit':
        edit(...valueDos)
        break;
    case 'delete':
        del(process.argv[3])
        normalize() 
        break;
    case 'find':
        filter(process.argv[3])
        break;
    
  


}




