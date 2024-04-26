const express = require('express');

const sqlDbConnect = require('./dbconnect');

const Router = express.Router();

Router.get('/', (req, res) => {
   const userData = [
      { name: 'Den', email: 'den@mail.com', age: 41 },
      { name: 'Lika', email: 'lika@mail.com', age: 21 },
   ];
   res.send(userData);
});

Router.get('/api/user', (req, res) => {
   sqlDbConnect.query('SELECT * FROM users', (err, rows) => {
      if (!err) {
         res.send(rows);
      } else {
         console.log(err);
      }
   });
});

Router.get('/api/country', (req, res) => {
   sqlDbConnect.query('SELECT * FROM country', (err, rows) => {
      if (!err) {
         res.send(rows);
      } else {
         console.log(err);
      }
   });
});

Router.get('/api/state/:id', (req, res) => {
   sqlDbConnect.query(
      "SELECT * FROM state WHERE countryid= '" + req.params.id + "'",
      (err, rows) => {
         if (!err) {
            res.send(rows);
         } else {
            console.log(err);
         }
      }
   );
});

Router.post('/api/adduser', (req, res) => {
   const name = req.body.name;
   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   const phone = req.body.phone;
   const gender = req.body.gender;
   const countryid = req.body.countryid;
   const stateid = req.body.stateid;
   const address1 = req.body.address1;
   const address2 = req.body.address2;
   const accept = req.body.accept;

   var sql = `INSERT INTO user_registration (name, username, email, password, phone, gender, countryid, stateid, address1, address2, accept) VALUES ('${name}', '${username}', '${email}', '${password}', '${phone}', '${gender}', '${countryid}', '${stateid}', '${address1}', '${address2}', '${accept}')`;

   sqlDbConnect.query(sql, (err, result) => {
      if (!err) {
         res.status(200).json('User registration inserted successfully');
      } else {
         console.log(err);
      }
   });
});

module.exports = Router;
