import express from "express";
import userRoutes from "./routes/contatos.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8000, () => console.log("API is working in port 8000!"));

