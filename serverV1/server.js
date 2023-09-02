import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";

// DOTENV CONFIG
dotenv.config();
const port = process.env.PORT;

// REST OBJECT
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// REST GET METHOD
app.get("/", (req, res) => {
  res.send("Wenn Mark Recopelacion");
});

// EVENT LISTENER
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
