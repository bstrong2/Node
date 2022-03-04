// function sayHello(name)
// {
//     console.log('Hello ' + name);
// }

//sayHello('Mosh');

// console.log(); // global


// Global objects
// setTimeout();
// clearTimeout();

// setInterval();
// clearInterval();

// var message = '';
// console.log(global.message); // This will show up as undefined message will not be added to the global object

// var sayHello = function(){ // This function is defined in the global scope, this will cause problems because it will replace any function with this new function.

// }

//window.sayHello();

//console.log(module);

// Use a module from the outside. Make sure to define them as constants so they are not overwriten
//const logger = require('./logger'); //load the module

//console.log(logger); //Show what the object looks like

// Use this one with module.exports.log = log;
//logger.log('message'); //Run the function from the logger.js file

// Use this one with module.exports = log;
//logger('message');

// This is how to use node.js built in functionality
// const path = require('path');

// var pathObj = path.parse(__filename);

// console.log(pathObj);


// const OS = require('os');

// var totalMemory = OS.totalmem();
// var freeMemory = OS.freemem();

// console.log('Total Memory: ' + totalMemory);


// // Template string
// // ES6 / ES2015 : ECMAScript 6
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);


// Don't use sync unless you want to wait for a node to finish (allows blocking)
// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files); // Shows all of the folders on the machine

//Error version
// fs.readdir('$', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });

//Non error version
// fs.readdir('./', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });


// When it starts with a capital letter it's a class
// const EventEmitter = require('events');


// //This is the same as above but with an arrow function
// emitter.on('messageLogged', (arg) => { // e, eventArg
//     console.log('Listener Called', arg);
// });

//const log = require('./logger');
//log('message');


// const Logger = require('./logger');
// const logger = new Logger();

// //Register a listener (Start listening for an emit signal)
// logger.on('messageLogged', function(arg){ // e, eventArg
//     console.log('Listener Called', arg);
// });

// logger.log('message');


const http = require('http');

//This server has all of the functionality that the emitters do.
const server = http.createServer(function(req, res){

    // In the browser go to 'http://localhost:3000'
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    // In the browser go to 'http://localhost:3000/api/courses'
    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }

});

// This isn't normally done in a real world application
// server.on('connection', (socket) => {
//     console.log('New connection');
// });

//We are giving the server a port
server.listen(3000);

console.log('Listening on port 3000...');


















