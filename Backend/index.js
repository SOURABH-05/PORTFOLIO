import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import { getProject } from "./Controler/Projects.controler.js";
import dotenv from 'dotenv';
import { sendGmail } from "./Controler/mail.controler.js";
dotenv.config();
const app = express()
const port = process.env.PORT || 5000;
const mongodb = process.env.MONGOURL
app.use(express.json());
app.use(cors())

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongodb);
  console.log("Database connected");
}


app.get('/', getProject);
app.post('/mail', sendGmail);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})