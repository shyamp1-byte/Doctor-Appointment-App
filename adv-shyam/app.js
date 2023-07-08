const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const mongoose = require("mongoose");
require("./Database/mongoose");



// SWAGGER START
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc");
// SWAGGER END

// setting app
app.options("*", cors());
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("mongo Database is connected successfully!");
});

app.get("/", (req, res) => {
  res.send("Doctor Appointment REST API running @ 3000");
});

app.post("/test", function (req, res) {
  const data = req.body;
  console.log(data);

  res.send("SUCCESS");
});

// SWAGGER START 
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Doctor Appointment Backend API with Swagger",
      version: "0.1.0",
      description:
        "This is an API to Register Users , Register Doctors, Login using JWT and To book & Cancel the appointments with validations",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Shyam Pedibhotla",
        url: "https://www.linkedin.com/in/shyam-pedibhotla-154a67180/",
        email: "shyamie123@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./Routers/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// SWAGGER END 

app.use("/users", require("./Routers/userRouter"));
app.use("/doctors", require("./Routers/docRouter"));
app.use("/login", require("./Routers/authRouter"));
app.use("/appointments", require("./Routers/appointmentRouter"));
app.use("/getallinfo", require("./Routers/getAllInfoRouter"))

app.listen(port, () => {
  console.log(`Doctors application: ${port}`);
});
