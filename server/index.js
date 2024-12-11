const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/harshit') {

        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("Yooo...");
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end("Not Found...");
    }
});
server.listen(8000, () => {
    console.log("Server is running on http://localhost:8000/harshit")
});