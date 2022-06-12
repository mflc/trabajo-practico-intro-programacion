const read = require ('./CRUD/read.js');
const write = require ('./CRUD/write.js');



let normalize = () => {
  let array = read();
for (let i = 0 ; i < array.length ; i++) {
      array[i].id = i + 1;
      
    }
    write(array)
    console.log('Se Organizaron los Id')
    
}

module.exports = normalize;






    
   


