#Rest_class

#Description
a basic quora page for practicing RESTFull API'S<br>

#Installation<br>
1. Clone the repo<br>
in the terminal-<br>
git clone https://github.com/Shubh1127/REST_CLASS.git<br>
<br>
// Install the dependencies:<br>
npm install<br>
<br>
//OR YOU CAN DO MANUALLY--<br>
// just go to the terminal and run these command or copy it<br>
1.Express<br>
npm i express<br>
<br>
to use it-<br>
//don't paste these to the terminal<br>
const express = require('express')<br>
const app = express()<br>

app.get('/', function (req, res) {<br>
  res.send('Hello World')<br>
})<br>
<br>
app.listen(3000)<br>
<br>
2.EJS<br>
npm i ejs<br>
// Some basic features<br>
1.Control flow with <% %><br>
2.Escaped output with <%= %> (escape function configurable)<br>
3.Unescaped raw output with <%- %><br>
4.Newline-trim mode ('newline slurping') with -%> ending tag<br>
5.Whitespace-trim mode (slurp all whitespace) for control flow with <%_ _%><br>

<br>
3.nodemon<br>
<br>
npm i nodemon<br>
<br>
Usage-<br>
nodemon [your node app]<br>
<br>
4.OVERRIDE Method<br>
npm install method-override <br>
to use it-<br>
var methodOverride = require('method-override')<br>
// override with the X-HTTP-Method-Override header in the request<br>
app.use(methodOverride('X-HTTP-Method-Override'))<br>
<br>
5.UUID  //to create different user's id<br>
<br>
npm install uuid<br>
<br>
//create a uuid<br>
import { v4 as uuidv4 } from 'uuid';<br>
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'<br>
<br>
//YOU CAN STYLE IT YOURSELF IF YOU WANT TO, IT'S BASIC PURPOSE TO PRACTICE CRUD OPERATION'S
