const mysql = require('mysql');

const con = mysql.createConnection({
    host: '34.95.55.47',
    user: "root",
    password: "123456",
    database: 'cigo',
    multipleStatements: true
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to the MySQL server!");
});
// con.end((err) => {
//     // The connection is terminated gracefully
//     // Ensures all remaining queries are executed
//     // Then sends a quit packet to the MySQL server.
// });
module.exports = con;


