const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'travelling_agency',
  port: 3306

})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
//-----------------------company----------------------//
app.get("/company", (req, res) => {
  const sqlget = 'SELECT * FROM travelling_agency.company;'
  db.query(sqlget, (err, result) => {
      res.send(result);
      console.log(result)

  });
});
//-----------------------users----------------------//
app.get("/users", (req, res) => {
  const sqlget = 'SELECT * FROM travelling_agency.users;'
  db.query(sqlget, (err, result) => {
      res.send(result);
      console.log(result)

  });
});
//-----------------------trips----------------------//
app.get("/trips", (req, res) => {
  const sqlget = 'SELECT * FROM travelling_agency.trips;'
  db.query(sqlget, (err, result) => {
      res.send(result);
      console.log(result)

  });
});
//-----------------------rates----------------------//
app.get("/rates", (req, res) => {
  const sqlget = 'SELECT * FROM travelling_agency.rates;'
  db.query(sqlget, (err, result) => {
      res.send(result);
      console.log(result)

  });
});
//-----------------------reservation----------------------//
app.get("/reservation", (req, res) => {
  const sqlget = 'SELECT * FROM travelling_agency.reservation;'
  db.query(sqlget, (err, result) => {
      res.send(result);
      console.log(result)

  });
});
//-----------------------Trips_photos----------------------//
app.get("/Trips_photos", (req, res) => {
  const sqlget = 'SELECT * FROM travelling_agency.Trips_photos;'
  db.query(sqlget, (err, result) => {
      res.send(result);
      console.log(result)

  });
});
app.listen(8001)