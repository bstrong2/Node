const EventEmitter = require('events');

var url = 'http://myloger.io/log'; //This isn't a real location, here for testing

class Logger extends EventEmitter{
    log(message){

        //Send an HTTP request
        console.log(message);
        // Making a noise, produce signalling. Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'}); // This is passing in an onject to send to the listener
    
    }
}


//module.exports.log = log; //Exporting the function to be used from the outside.

//module.exports = log; //This is now a function no objects involved

module.exports = Logger;
