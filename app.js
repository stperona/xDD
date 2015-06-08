var express = require('express'),
    bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

// Initialize express app.
var app = exports.app = express();

// Set up static file serving.
app.use(express.static('public'));

// Setup middlewares.
app.use(bodyParser.json());

var carData = [
  {make: 'Ferrari', model: '458 Italia', year: 2014, color: 'red'},
  {make: 'Lamborghini', model: 'Aventador', year: 2014, color: 'silver'},
  {make: 'Aston Martin', model: 'Vanquish', year: 2014, color: 'charcoal'},
  {make: 'Tesla', model: 'Model S', year: 2014, color: 'white'},
  {make: 'Porsche', model: '911 Turbo', year: 2014, color: 'red'},
  {make: 'Chevrolet', model: 'Corvette Stingray', year: 2014, color: 'charcoal'},
  {make: 'BMW', model: 'i8', year: 2014, color: 'silver'},
  {make: 'Audi', model: 'R8', year: 2014, color: 'black'},
  {make: 'Rolls-Royce', model: 'Phantom', year: 2014, color: 'black'},
  {make: 'Land Rover', model: 'Range Rover', year: 2014, color: 'silver'},
  {make: 'Bentley', model: 'Mulsanne', year: 2014, color: 'gray'},
  {make: 'Jaguar', model: 'F-Type', year: 2014, color: 'red'},
  {make: 'Maserati', model: 'Gran Turismo', year: 2014, color: 'red'},
  {make: 'Cadillac', model: 'CTS V', year: 2014, color: 'white'},
];

// Get All.
app.get('/cars', function (req, res) {
  return res.status(200).json(carData);
});

// Get by ID.
app.get('/cars/:id', function (req, res) {
  if (carData[req.params.id]) {
    return res.status(200).json(carData[req.params.id]);
  } else {
    return res.status(404).send("The resource with the given ID doesn't exist.");
  }
});

// Add car.
app.post('/cars', function (req, res) {
  return res.status(201).json(req.body);
});

// Update car.
app.put('/cars/:id', function (req, res) {
  if (carData[req.params.id]) {
    return res.status(200).json(req.body);
  } else {
    return res.status(404).send("The resource with the given ID doesn't exist.");
  }
});

// Delete car.
app.delete('/cars/:id', function (req, res) {
  if (carData[req.params.id]) {
    return res.status(200).send("Car deleted.");
  } else {
    return res.status(404).send("The resource with the given ID doesn't exist.");
  }
});

// Start server.
var server = app.listen(port, function() {
  console.log("Server listening on port: " + port);
});