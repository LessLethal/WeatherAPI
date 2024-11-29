const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const bodyParser = require("body-parser");
const { PassThrough } = require("stream");
const fs = require("fs");
const cookieparser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/Weather", (req, res) => {
  const ID = "721fd4a19518fe5cc5e8d31485ea401a";
  const city = "";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ID}`;

  async function weather() {
    const response = await fetch(URL);
    const data = await response.json();
    const temperature = Math.round(data.main.temp - 273.15);
    res.send(`Temperature is ${temperature}°C in ${city}`);
  }
  weather();
});

app.post("/Weather", (req, res) => {
    console.log("So long so good");
  const ID = "721fd4a19518fe5cc5e8d31485ea401a";
  const city = req.body.city;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ID}`;

  async function weather() {
    const response = await fetch(URL);
    const data = await response.json();
    const temperature = Math.round(data.main.temp - 273.15);
    res.send(`Temperature is ${temperature}°C in ${city}`);
  }
  weather();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, function () {
  console.log("Server Has Starded");
});
//Ger respons när servern startar.
