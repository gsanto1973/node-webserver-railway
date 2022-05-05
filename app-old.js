//console.log("Hola Giordano");

const http = require('http');

http.createServer((req, res) => {
    /*
    console.log(req);
    res.writeHead(200, { "Content-Type": "application/csv" })

        const persona = {
            id: 123,
            nombre: "Giorda"
        }

    res.write('Hola Giordanoooo');
    res.write(JSON.stringify(persona));
    res.write("1,Gior\n");
    res.write("2,Juan\n");
    res.write("3,Sandra\n");
    res.write("4,Cata\n");
    */
    res.write("Hola Gior");
    res.end();
}).listen(8080);

console.log('Escuchando por el puerto', 8080);