import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

const getConnection = () => {
    console.log("conexion exitosa", connection)
    return connection;
};

module.exports = {
    getConnection
};
