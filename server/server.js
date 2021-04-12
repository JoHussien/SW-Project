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
  const sqlget = 'SELECT * FROM travelling_agency.company'
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
  const sqlget = 'SELECT * FROM travelling_agency.Trips;'
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
//-------------------------Getting my account by login--------------------------------
app.get("/myaccount/:tagId", (req, res) => {
  const sqlget = `SELECT * FROM travelling_agency.company where mail="`+ req.param("tagId") + '"'
  db.query(sqlget, (err, result) => {
      res.send(result);
      console.log(result)

  });
});

//---------------create new account--------------------//
app.post(`/new_account`, (req, res) => {
  const company = req.body.company;
  const mail = req.body.mail;
  const pass = req.body.pass;
  const comp_name = req.body.comp_name;
  const representative_fame = req.body.representative_fame;
  const representative_lname = req.body.representative_lname;
  const Tele_number = req.body.Tele_number;
  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const address = req.body.address;

  // if(company==true){
  const insert = `insert into travelling_agency.company values (?,?,?,?,?,?,?,?,?,?);`
  // }

  db.query(insert
      , [mail, pass, comp_name, representative_fame, representative_lname,Tele_number,city,country,street,address]
      , (err, result) => {

          console.log(err)
          console.log(result)
      });

});
app.listen(8001)