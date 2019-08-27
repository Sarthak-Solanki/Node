const fs = require('fs');
const book = 
{
    title:'Kya book hai',
    body:'sarthak',
}
//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('1-json.json',bookJSON);
const dataBuffer = fs.readFileSync('1-json.json')
const jso = dataBuffer.toString();
const datafinal = JSON.parse(jso);
datafinal.name = "Sarthak"
fs.writeFileSync('1-json.json',JSON.stringify(datafinal))
console.log(datafinal)

