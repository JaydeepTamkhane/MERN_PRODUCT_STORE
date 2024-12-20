import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import router from "./routes/product.route.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());


app.use(cors())

app.use("/api/products", router);
const PORT = process.env.PORT||5000;

app.listen(PORT, () => {
  dbConnect();
  console.log("server stated at port", PORT);
});

console.log(process.env.MONGO_URI);
