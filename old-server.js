const http = require('http');
const fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, { 'content-type': 'text/html' })
    

    fs.readFile("./views/index.html", null, (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write("file not found");
        } else {
            response.write(data)
        }
        response.end()   
    })
};


function onJson(request, response) {
    response.writeHead(200, { 'content-type': 'application/json' })
    const data = {
        title: "data mahasiswa",
        result: [
            {nama:'naruto', nim: '123123'},
            {nama:'saske', nim: '1231234'},
            {nama:'sakura', nim: '123125'}
        ]
    }
    response.end(JSON.stringify(data))
}



http.createServer(onRequest).listen(7000);
// http.createServer(onJson).listen(7000);