var express = require('express');
var bodyParser = require('body-parser');

var mongooseConnection = require('./modules/mongoose-connection');
var listing = require('./routes/listing');
var rental = require('./routes/rental');

var app = express();
var port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(express.static('server/public'));
mongooseConnection.connect();

app.use('/listing', listing);
app.use('/rental', rental);

app.listen(port, function(){
    console.log('listening on port', port);  
});