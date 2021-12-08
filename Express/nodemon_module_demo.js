
const express = require("express");
const app = express();
app.listen(3400,
            ()=>{
                console.log("express server is up and running");                
                console.log("this is to demo nodemon");
                console.log("the server restarts automatically with changes");
            }
    );
