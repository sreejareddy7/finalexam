const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const fs = require('fs');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const routes = require('./routes/route.js')(app, fs);
const server = app.listen(5002, () => {
    console.log("Server runningon port 5002");
});
