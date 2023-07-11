import { getConnection } from "../database/database";

const getUsers = async (request, response) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM users");
        response.json(result);
    } catch (error) {
      response.status(500);
      response.send(error.message);
    }
  }
  
  
  const getUser = async (request, response) => {
    try {
        const { id } = request.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM users WHERE id = ?", id);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
  };
  
  const addUser = async (request, response) => {
    try {
        const { name, lastname, email, password } = request.body;
  
        if (name === undefined || lastname === undefined || email === undefined || password === undefined) {
          response.status(400).json({ message: "Bad Request. Please fill all field." });
        }
  
        const User = { name, lastname, email, password };
        const connection = await getConnection();
        await connection.query("INSERT INTO users SET ?", User);
        response.json({ message: "User added" });
    } catch (error) {
      response.status(500);
      response.send(error.message);
    }
  };
  
  const updateUser = async (request, response) => {
    try {
        const { id } = request.params;
        const { name, lastname, email, password } = request.body;
  
        if (name === undefined || lastname === undefined || email === undefined || password === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
  
        const User = { name, lastname, email, password };
        const connection = await getConnection();
        const result = await connection.query("UPDATE users SET ? WHERE id = ?", [User, id]);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
  };
  
  const deleteUser = async (request, response) => {
    try {
        const { id } = request.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM users WHERE id = ?", id);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
  };
  
  
  //exportando la mentodos (funciones) para que sean visibles en la app
  export const methods = {
          getUsers,
          getUser,
          addUser,
          updateUser,
          deleteUser
  };