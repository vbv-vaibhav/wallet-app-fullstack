import express from "express";
import cors from "cors";
import { router } from "./routes/index";

app.use(cors());
app.use(express.json());
const app = express();

app.use("/api/v1", router);

app.listen(3000);
