define({ "api": [
  {
    "type": "post",
    "url": "/api/calculate",
    "title": "",
    "version": "0.1.0",
    "name": "Calculate",
    "group": "Calculator",
    "permission": [
      {
        "name": "all"
      }
    ],
    "description": "<p>a very simple calculator here</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "number1",
            "description": "<p>Mandatory first number</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "number2",
            "description": "<p>Mandatory second number.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"add\"",
              "\"subtract\"",
              "\"divide\"",
              "\"multiply\""
            ],
            "optional": false,
            "field": "operation",
            "description": "<p>Mandatory Operation.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -H \"Content-Type: application/json\" -X POST -d '{\"number1\":10,\"number2\":5,\"operation\":\"add\"}' http://127.0.0.1:8080/api/calculate",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result",
            "description": "<p>the calculated result</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "links",
            "description": "<p>List of specified actions (Array of Objects).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"result\": 15,\n  \"links\": [{\"rel\":\"calculate\",\"method\":\"POST\",\"href\":\"/api/calculate\"}]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidInput",
            "description": "<p>One of the request inputs is not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request \n{\n  \"error\": \"One of the request inputs is not valid.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./calc.js",
    "groupTitle": "Calculator"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "c__Work_nodejs_creditsense_routes_doc_main_js",
    "groupTitle": "c__Work_nodejs_creditsense_routes_doc_main_js",
    "name": ""
  }
] });
