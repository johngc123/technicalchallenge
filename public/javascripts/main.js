var Main = (function(bobject) {
  
  //Calculator Object
  var Calculator = (function() {
      
    var apiurl = {
      calculate:'/api/calculate'
    };
	
	var number1 = 0;
	var number2 = 0;
	var operation = '';
    
	//calculate method
	//pass callback function
    var calculate = function(callback){
      var jsdata = {};
      jsdata.number1 = this.number1;
      jsdata.number2 = this.number2;
      jsdata.operation = this.operation;
	  //call calculate api
      bobject.post(JSON.stringify(jsdata), apiurl.calculate, function(data){
        callback(data);
      }, function(err){
		if(err&&err.responseJSON){
			alert(err.responseJSON.error);
		}  
	  });
    }

    return {
		number1: number1,
		number2: number2,
		operation: operation,
      	calculate:calculate
    };
  })();

  return {
    Calculator:Calculator
  };

})(Util.BaseDataObject);