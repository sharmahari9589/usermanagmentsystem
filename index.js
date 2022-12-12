import express from "express";
import "dotenv/config"
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from 'url';
import { route } from "./server/routes/router.js";
import connectDb from "./server/database/connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT
const app = express();

//body-parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//time taken in response
app.use(morgan("tiny"))

// database connection
connectDb();

//set view engine
app.set("view engine","ejs");
// app.set("viws","../views/ejs")

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assests/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assests/js")))


//load router

app.use(route);



app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);

});
