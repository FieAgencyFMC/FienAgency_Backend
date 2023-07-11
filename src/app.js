import express from "express";
import morgan from "morgan";
// Routes
import userRoutes from "./routes/user.routes";
import teamRoutes from "./routes/team.routes";


const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);



export default app;
