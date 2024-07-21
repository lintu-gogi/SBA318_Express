const express = require("express");
const bodyParser = require("body-parser");
//path for pug
const path = require('path');
// These are now route imports, not database imports!
const users = require("./routes/users");


const app = express();
const port = 3001;

// Parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
// Set Pug as the template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Logging Middlewaare
app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
  );
  if (Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});

// Use our Routes

app.use("/",users);


// 404 Middleware
app.use((req, res) => {
  res.status(404);
  res.json({ error: "Resource Not Found!!!" });
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});
