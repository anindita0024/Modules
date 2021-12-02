const fs = require("fs");

fs.readFile("./store.txt" , "utf-8" ,(err, data) =>{
    console.log(data);
})