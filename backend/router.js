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
   sqlDbConnect.query('select * from users', (err, rows) => {
      if (!err) {
         res.send(rows);
      } else {
         console.log(err);
      }
   });
});

Router.get('/api/country', (req, res) => {
   sqlDbConnect.query('select * from country', (err, rows) => {
      if (!err) {
         res.send(rows);
      } else {
         console.log(err);
      }
   });
});

Router.get('/api/state/:id', (req, res) => {
   sqlDbConnect.query(
      "select * from state where countryid= '" + req.params.id + "'",
      (err, rows) => {
         if (!err) {
            res.send(rows);
         } else {
            console.log(err);
         }
      }
   );
});

module.exports = Router;
