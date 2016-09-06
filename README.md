# techchallenge

simeple calculator

## Definition

Implement simple calculator using back end and front end technologies. All calculations should be performed by the back-end. Front-end represents the supporting UI to interface with the back-end.

## Getting Started
```bash
npm install
node server.js
```
http://127.0.0.1:8080/

## APIs

APIs document(/routes/doc).

Example usage:
curl -H "Content-Type: application/json" -X POST -d '{"number1":10,"number2":5,"operation":"add"}' http://127.0.0.1:8080/api/calculate

<table>
        <thead>
          <tr>
          <th style="width: 30%">Field</th>
            <th style="width: 10%">Type</th>
            <th style="width: 60%">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="code">number1</td>
              <td>
                Float
              </td>
            <td>
            <p>Mandatory first number</p>
            
            
                        </td>
          </tr>
          <tr>
            <td class="code">number2</td>
              <td>
                Float
              </td>
            <td>
            <p>Mandatory second number.</p>
            
            
                        </td>
          </tr>
          <tr>
            <td class="code">operation</td>
              <td>
                string
              </td>
            <td>
            <p>Mandatory Operation.</p>
            
            
            <p class="type-size">Allowed values:
                <code>"add"</code>, 
                <code>"subtract"</code>, 
                <code>"divide"</code>, 
                <code>"multiply"</code>
              </p>
            </td>
          </tr>
        </tbody>
      </table>

## Tests

You can run the unit tests by running the following commands:

```bash
npm install   // install modules dev dependencies
npm test      // run unit tests
```