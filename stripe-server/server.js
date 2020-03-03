const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//const path = require("path");  This is only needed for heroku
const dotenv = require("dotenv");

dotenv.config();

// This was required for the heroku build. I am using nginx proxy w/this nodejs server
// which made this code obsolete.
//if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5555;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// This was how the instructor built it for heroku, I am using nginx proxy w/this nodejs server.
// which made this code obsolete
//if (process.env.NODE_ENV === "production") {
//  app.use(epress.static(path.join(__dirname, "client/build")));
//  app.get("*", function(req, res) {
//    res.sendFile(path.join(__dirname, "client/build", "index.html"));
//  });
//}

app.listen(port, error => {
  if (error) throw error;
  console.log("Server is running on port " + port);
});

// Respond to GET Requests with a basic string.
app.get("/", (req, res) => {
  res.send({
    message: "Hello There!",
    timestamp: new Date().toISOString()
  });
});

// Post payment info to Stripe and output the response back to the React App.
app.post("/", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      console.log("ERROR " + stripeErr);
      res.status(500).send({ error: stripeErr });
    } else {
      console.log("Success " + stripeRes);
      res.status(200).send({ Success: stripeRes });
    }
  });
});
