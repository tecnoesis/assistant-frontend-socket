This repo contains the frontend of an AI assistant on the side of the screen that can be overlaid in any website.
It is built in html / css (tailwind) / javascript.
It uses sockets for the communication with the backend.
The backend replies with a dummy message, you can add your own reply mechanism.


Initial setup without the package.json:

npm init
npm install express socket.io ejs
npm install nodemon --save-dev # Install nodemon only as dev dependency

The background website is set to www.tecnoesis.gr showcasing the assistant overlaid on top of our website. 
You can change it with the one you want by setting the variable 'backdropRootURL' in 'server.js'
The assistant frontend was written as ejs template and can be found in 'views/assistant.ejs'

Feel free to reach us for anything you want:

https://www.tecnoesis.gr
