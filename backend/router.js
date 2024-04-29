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

// Получение всех пользователей Star Wars
Router.get('/api/user', (req, res) => {
   sqlDbConnect.query('SELECT * FROM users', (err, rows) => {
      if (!err) {
         res.send(rows);
      } else {
         console.log(err);
      }
   });
});

// Получение страны
Router.get('/api/country', (req, res) => {
   sqlDbConnect.query('SELECT * FROM country', (err, rows) => {
      if (!err) {
         res.send(rows);
      } else {
         console.log(err);
      }
   });
});

// Получение региона
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

// Добавление нового пользователя
Router.post('/api/useradd', (req, res) => {
   const name = req.body.name;
   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;
   const phoneno = req.body.phoneno;
   const gender = req.body.gender;
   const countryid = req.body.countryid;
   const stateid = req.body.stateid;
   const address1 = req.body.address1;
   const address2 = req.body.address2;
   const accept = req.body.accept;
   const status = 1;

   var sql = `INSERT INTO user_registration (name, username, email, password, phoneno, gender, countryid, stateid, address1, address2, accept, status) VALUES ('${name}', '${username}', '${email}', '${password}', '${phoneno}', '${gender}', '${countryid}', '${stateid}', '${address1}', '${address2}', '${accept}', '${status}')`;

   sqlDbConnect.query(sql, (err, result) => {
      if (!err) {
         res.status(200).json('User registration inserted successfully');
      } else {
         console.log(err);
      }
   });
});

// Вывод на экран всех пользователей (данные с нескольких таблиц)
Router.get('/api/userregisterdata', (req, res) => {
   var sql = `SELECT ur.name, ur.username, ur.email, ur.phoneno, ur.gender, ur.address1, ur.status, c.name as countryname, s.state_name FROM user_registration as ur
   join country as c on c.id = ur.countryid
   join state as s on s.state_id = ur.stateid
   WHERE ur.status = 1`;

   sqlDbConnect.query(sql, (err, row) => {
      if (!err) {
         res.send(row);
      } else {
         console.log('Error: ' + err);
      }
   });
});

// Редактирование пользователя
Router.put('/api/useredit/:id', (req, res) => {
   const id = req.params.id;
   const {
      name,
      username,
      email,
      phoneno,
      gender,
      countryid,
      stateid,
      address1,
      address2,
      accept,
      status,
   } = req.body;

   var sql = `UPDATE user_registration SET name='${name}', username='${username}', email='${email}', phoneno='${phoneno}', gender='${gender}', countryid='${countryid}', stateid='${stateid}', address1='${address1}', address2='${address2}', accept='${accept}', status='${status}' WHERE userid='${id}'`;

   sqlDbConnect.query(sql, (err, result) => {
      if (!err) {
         res.status(200).json('User edited successfully');
      } else {
         console.log(err);
      }
   });
});

module.exports = Router;
