const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//my routes:
const authRoutes = require("./routes/authentications");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");



//Db Connections:
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
}).then(()=> console.log("DB connected")).catch((err) =>{
    console.log(err);
});

//middlewares:
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes:
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);


//Port:
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`App is running at ${port}`);
});