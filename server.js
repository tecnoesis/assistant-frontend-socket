const express = require('express');
const bodyParser = require('body-parser');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const path = require('path');

const server = http.createServer(app); 
const io = new Server(server);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

const backdropURLMiddleware = (req, res, next) => { 
    req.bgURL = req.originalUrl;
    next();
}

app.use(backdropURLMiddleware);

const backdropRootURL = 'https://www.tecnoesis.gr';

app.get('/*', async (req, res) => {
    const fullURL = `${backdropRootURL}${req.bgURL}`
    res.render('assistant', {backdropURL : fullURL});
});


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

io.on('connection', async (socket) => {

    socket.on('client message', async (msg) => {

        await delay(500)

        socket.emit('server message', { response: 'Dummy answer from backend' });
    });
});