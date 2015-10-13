// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models/applicantdbmodel')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/applicants', function(req, res){
	res.sendFile('html/applicants.html', {root : './public'});
});

// creates and applicant
app.post('/applicant', function(req, res){
	console.log(req.body)
	var appone = new db.Applicant(req.body)
	appone.save()
	// Here is where you need to get the data
	// from the post body and store it in the database
	// res.send('Succcess!');
	res.redirect('/applicants');
});



// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})