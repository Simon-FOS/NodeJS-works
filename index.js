import http from 'http';

http.createServer((req, res) => {
    console.log('server running on port 8000')
    res.writeHead(200, { "Content-type": "Application/Json" });
    return res.end(JSON.stringify({ 'data': 'welcome to the home page' }));
}).listen(8000);