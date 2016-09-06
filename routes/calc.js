var NodeCache = require( "node-cache" );
var myCache = new NodeCache( { stdTTL: 100, checkperiod: 120 } );

/**
 * @api {post} /api/calculate
 * @apiVersion 0.1.0
 * @apiName Calculate
 * @apiGroup Calculator
 * @apiPermission all
 *
 * @apiDescription a very simple calculator here
 *
 * @apiParam {Float} number1     Mandatory first number
 * @apiParam {Float} number2     Mandatory second number.
 * @apiParam {string="add","subtract","divide","multiply"} operation     Mandatory Operation.
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X POST -d '{"number1":10,"number2":5,"operation":"add"}' http://127.0.0.1:8080/api/calculate
 *
 * @apiSuccess {Number}   result      the calculated result
 * @apiSuccess {Object[]} links       List of specified actions (Array of Objects).
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "result": 15,
 *       "links": [{"rel":"calculate","method":"POST","href":"/api/calculate"}]
 *     }
 *
 * @apiError InvalidInput One of the request inputs is not valid.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 400 Bad Request 
 *     {
 *       "error": "One of the request inputs is not valid."
 *     }
 */
exports.calculate = function(req, res){
	//define return object
	var objreturn = {result:0,links:[]};
	objreturn.links.push({'rel':'calculate','method':req.method,'href':req.url})
	
	var n1 = req.body.number1;
	var n2 = req.body.number2;
	var operation = req.body.operation;
	
	if(isNaN(n1)||isNaN(n2)){
		//invalid number
		res.status(400).send({ error: "One of the request numbers is not valid." });
		return;
	}
	//set cache key
	var cachekey = n1+"_"+operation+"_"+n2;
	//return result if the key is in the cache
	var rst = myCache.get( cachekey );
	if ( rst != undefined ){
		objreturn.result = rst;
		res.json(objreturn);
		return;
	}
	
	//calculate the result
	switch (operation){
		case 'add':
			objreturn.result = +n1 + +n2;
			break
		case 'subtract':
			objreturn.result = +n1 - +n2;
			break
		case 'divide':
			if(n2==0){
				res.status(400).send({ error: "can't be divided by zero" });
				return;
			}else{
				objreturn.result = +n1 / +n2;
			}
			break
		case 'multiply':
			objreturn.result = +n1 * +n2;
			break		
		default: 
			//illegal operation
			res.status(400).send({ error: "The operation is not valid." });
			return;
	}
	
	//if there is no error, store the key and value in the cache.
	if(objreturn.result!==''){
		myCache.set( cachekey, objreturn.result, 10000 );
	}
	
	//return json object with result
	res.json(objreturn);
};