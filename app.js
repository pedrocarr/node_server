const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        
    }

})


server.listen(3000, () => {
 console.log("Server is running on PORT 3000!!")
});