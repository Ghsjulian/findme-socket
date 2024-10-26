const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (data) => {
        console.log('Message received:', data);
        // Echo the message back
        socket.emit('message', { message: 'Hello from server!' });
    });

    socket.on('disconnect', () => {
        console.log('User  disconnected');
    });
});

const PORT = 8050;
server.listen(PORT, '192.0.0.4', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});












/*
// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Set the port for the server
const PORT = 8050;

// Middleware to serve static files (optional)
app.use(express.static('public'));

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('A client connected:', socket.id);

    // Listen for messages from the client
    socket.on('message', (data) => {
        console.log('Message received from client:', data);
        
        // Emit a message back to the client
        socket.emit('message', { text: 'Hello from server!' });
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('A client disconnected:', socket.id);
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

*/









/*
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('offer', (data) => {
        socket.to(data.target).emit('offer', data);
    });

    socket.on('answer', (data) => {
        socket.to(data.target).emit('answer', data);
    });

    socket.on('ice-candidate', (data) => {
        socket.to(data.target).emit('ice-candidate', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(8050, () => {
    console.log('Signaling server running on port 8050');
});

*/




/*

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Function to create location URL
function createLocation(data) {
    const [lat, lon] = data.split("@");
    const loc = `https://www.openstreetmap.org?mlat=${lat}&mlon=${lon}`;
    console.log(`\nLocation : ${loc}\n`);
}

// Socket.IO connection
io.on('connection', (socket) => {
    console.log('[+] Client Connected');

    socket.on('location_data', (data) => {
        createLocation(data);
        console.log(`\n[+] Message From Client --> ${data}`);
        const sendToClient = "This message from server";
        socket.emit('response', sendToClient);
    });

    socket.on('disconnect', () => {
        console.log('[+] Client Disconnected');
    });
});

// Start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`[+] Server Listening On 0.0.0.0:${PORT}\n`);
});




*/


/*
const express = require('express');
const net = require('net');

const app = express();
const port = 8080;

// Middleware to parse JSON bodies (if needed for HTTP requests)
app.use(express.json());

// TCP Socket Server
const socketServer = net.createServer((clientSocket) => {
    console.log(`\n[+] Client connected: ${clientSocket.remoteAddress}:${clientSocket.remotePort}`);

    clientSocket.on('data', (data) => {
        const message = data.toString();
        createLocation(message);
        console.log(`\n[+] Message From Client --> ${message}`);

        const sendToClient = "This message from server";
        clientSocket.write(sendToClient);
    });

    clientSocket.on('error', (err) => {
        console.error(`\n[!] ERROR: ${err.message}\n`);
    });

    clientSocket.on('end', () => {
        console.log(`\n[+] Client disconnected: ${clientSocket.remoteAddress}:${clientSocket.remotePort}`);
    });
});

// Function to create a location URL from latitude and longitude
function createLocation(data) {
    const [lat, lon] = data.split("@");
    const loc = `https://www.openstreetmap.org?mlat=${lat}&mlon=${lon}`;
    console.log(`\nLocation: ${loc}\n`);
}

// Start the TCP socket server
socketServer.listen(port, '0.0.0.0', () => {
    console.log(`\n[+] Socket Server Listening On http://localhost:${port}\n`);
});

// Start the Express server (optional, if you want to handle HTTP requests)
app.listen(3000, () => {
    console.log(`\n[+] Express Server Listening On http://localhost:3000\n`);
});

// Handle server errors
socketServer.on('error', (err) => {
    console.error(`\n[!] Server Error: ${err.message}\n`);
});


app.listen((port)=>{
  console.log("Http Server Running");
})

*/


/*


const net = require('net');

// Function to create a location URL from latitude and longitude
function createLocation(data) {
    const [lat, lon] = data.split("@");
    const loc = `https://www.openstreetmap.org?mlat=${lat}&mlon=${lon}`;
    console.log(`\nLocation: ${loc}\n`);
}

// Function to start the socket server
function socketServer(host = '0.0.0.0', port = 8080) {
    const server = net.createServer((clientSocket) => {
        console.log(`\n[+] Client connected: ${clientSocket.remoteAddress}:${clientSocket.remotePort}`);

        clientSocket.on('data', (data) => {
            const message = data.toString();
            createLocation(message);
            console.log(`\n[+] Message From Client --> ${message}`);

            const sendToClient = "This message from server";
            clientSocket.write(sendToClient);
        });

        clientSocket.on('error', (err) => {
            console.error(`\n[!] ERROR: ${err.message}\n`);
        });

        clientSocket.on('end', () => {
            console.log(`\n[+] Client disconnected: ${clientSocket.remoteAddress}:${clientSocket.remotePort}`);
        });
    });

    server.listen(port, host, () => {
        console.log(`\n[+] Server Listening On ${host}:${port}\n`);
    });

    server.on('error', (err) => {
        console.error(`\n[!] Server Error: ${err.message}\n`);
    });
}

// Start the server
if (require.main === module) {
    socketServer();
}

*/
