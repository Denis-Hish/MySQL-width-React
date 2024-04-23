const sql = require('mysql2');

const sqlconnect = sql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'react_mysql',
   multipleStatements: true,
});

sqlconnect.connect(err => {
   if (!err) {
      console.log('Database connected');
   } else {
      console.log('Database not connected');
   }
});

module.exports = sqlconnect;
