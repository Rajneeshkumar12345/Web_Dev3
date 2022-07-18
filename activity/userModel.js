 const mongoose = require('mongoose')
 let dblink = "mongodb+srv://Rajneesh:Mongodb%4012345@freecluster.83r7lqj.mongodb.net/?retryWrites=true&w=majority";
 mongoose 
       .connect(dblink)
       .then(function () {
          console.log("connected");
       })
       .catch(function (err) {
          console.log("error", err);
       })
