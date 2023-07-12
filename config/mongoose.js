// require mongoose
const dotenv    = require('dotenv');
const mongoose  = require('mongoose');

// connect to database
mongoose.connect('mongodb+srv://todo_user:todo_user@cluster0.d0tty0l.mongodb.net/todo_db?retryWrites=true');

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// check for error
db.on('error', console.error.bind(console, 'connection error:'));

// once connection is open, log to console
db.once('open', function() {
    console.log('connected to database');
});