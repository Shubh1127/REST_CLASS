#Rest_class

#Description
a basic quora page for practicing RESTFull API'S

#Installation
// just go to the terminal and run these command or copy it
1.Express
npm i express

to use it-
//don't paste these to the terminal
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

2.EJS
npm i ejs
// Some basic features
1.Control flow with <% %>
2.Escaped output with <%= %> (escape function configurable)
3.Unescaped raw output with <%- %>
4.Newline-trim mode ('newline slurping') with -%> ending tag
5.Whitespace-trim mode (slurp all whitespace) for control flow with <%_ _%>


3.nodemon

npm i nodemon

Usage-
nodemon [your node app]

4.OVERRIDE Method
npm install method-override 
to use it-
var methodOverride = require('method-override')
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'))

5.UUID  //to create different user's id

npm install uuid

//create a uuid
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'