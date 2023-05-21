import { createServer } from "http";

createServer((req, res) => {

  res.write("Hola mundo");  
  res.end();

}).listen(8080);


console.log('escuchando en el puerto', 8080)