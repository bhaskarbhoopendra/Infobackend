const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

// Starting up the app
const app= express();

// Requiring routes
const blogRoutes = require("./routes/blog")
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const tagsRoutes = require("./routes/tags")

// connecting to database
mongoose.connect(process.env.DATABASE,{useCreateIndex:true,useFindAndModify:false,useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log('connected to database');
}).catch((e)=>{
    console.log(e)
})
//Requiring middleware
app.use(bodyParser.json())
app.use(cookieParser());
app.use(morgan('dev'))

if (process.env.NODE_ENV === 'development') {
    app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}
// routes middleware
app.use("/api",blogRoutes);
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api",categoryRoutes);
app.use("/api",tagsRoutes);

app.listen(process.env.PORT ,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})


