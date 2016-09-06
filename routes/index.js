/*
 * Router
 */
 
var calc = require('./calc');
 
module.exports = function (app) {
	
	//home page (accessed at GET http://localhost:8080/api)
	app.get("/", function(req, res){
		var view = {};
		view.title = "Calculator";
		res.render('index', view);
	});
	
	//api for calcuator
	app.post("/api/calculate", calc.calculate); 
}