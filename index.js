import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import authApp from "./routes/auth.js";
import managerApp from "./routes/manager.js";
import employeeApp from "./routes/employee.js";
import petApp from "./routes/pet.js";
dotenv.config();

const { PORT } = process.env;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/auth", authApp);
app.use("/api/manager", managerApp);
app.use("/api/employee", employeeApp);
app.use("/api/pet", petApp);

app.listen(PORT, () => {
  console.log("Server Start...");
});
