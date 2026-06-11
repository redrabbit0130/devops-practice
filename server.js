const http = require("http");

const server = http.createServer((req, res) => {
	if(req.url === "/health"){
		res.writeHead(200, {"Content-Type": "application/json"});
		res.end(JSON.stringify({status:"ok"}));
		return;
	}
	
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello DevOps Beginner");
});

server.listen(3000, "0.0.0.0", () => {
	console.log("server running on http://localhost:300");
});
