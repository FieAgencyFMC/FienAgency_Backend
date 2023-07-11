import { getConnection } from "../database/database";

const getTeams = async (request, response) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM teams");
        response.json(result);
    } catch (error) {
      response.status(500);
      response.send(error.message);
    }
  }
  
  
  const getTeam = async (request, response) => {
    try {
        const { id } = request.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM teams WHERE id = ?", id);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
  };
  
  /**
   * 
  id,idLeague,teamName,teanShield,agent,contactNumber,email,facebook,instagram, tweeter,webSite,idCountry,idCity,idState,Address,active

   */
  const addTeam = async (request, response) => {
    try {
        const { idLeague,teamName,teanShield,agent,contactNumber,email,facebook,instagram, tweeter,webSite,idCountry,idCity,idState,Address, active } = request.body;
  
        if (teamName === undefined || contactNumber === undefined || email === undefined || idCountry === undefined || idCity === undefined || idState === undefined || Address === undefined  || active === undefined ) {
          response.status(400).json({ message: "Bad Request. Please fill all field." });
        }
  
        const Team = { idLeague,teamName,teanShield,agent,contactNumber,email,facebook,instagram, tweeter,webSite,idCountry,idCity,idState,Address,active };
        const connection = await getConnection();
        await connection.query("INSERT INTO teams SET ?", Team);
        response.json({ message: "Team added success" });
    } catch (error) {
      response.status(500);
      response.send(error.message);
    }
  };
  
  const updateTeam = async (request, response) => {
    try {
        const { id } = request.params;
        const { idLeague,teamName,teanShield,agent,contactNumber,email,facebook,instagram, tweeter,webSite,idCountry,idCity,idState,Address, active } = request.body;
  
        if (teamName === undefined || contactNumber === undefined || email === undefined || idCountry === undefined || idCity === undefined || idState === undefined || Address === undefined  || active === undefined ) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
  
        const Team = { idLeague,teamName,teanShield,agent,contactNumber,email,facebook,instagram, tweeter,webSite,idCountry,idCity,idState,Address,active };
        const connection = await getConnection();
        const result = await connection.query("UPDATE teams SET ? WHERE id = ?", [Team, id]);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
  };
  
  const deleteTeam = async (request, response) => {
    try {
        const { id } = request.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM teams WHERE id = ?", id);
        response.json(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
  };
  
  
  //exportando la mentodos (funciones) para que sean visibles en la app
  export const methods = {
          getTeams,
          getTeam,
          addTeam,
          updateTeam,
          deleteTeam
  };