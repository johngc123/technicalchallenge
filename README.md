# techchallenge

simeple calculator

## Definition

Implement simple calculator using back end and front end technologies. All calculations should be performed by the back-end. Front-end represents the supporting UI to interface with the back-end.

## Getting Started
```bash
node server.js
```
http://127.0.0.1:8080/

## APIs

APIs document(./routes/doc).

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


## Tests

You can run the unit tests by running the following commands:

```bash
npm install   // install modules dev dependencies
npm test      // run unit tests
```