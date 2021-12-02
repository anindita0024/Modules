const fs = require("fs");

const StudentName  = process.argv[2];
const qualification  = process.argv[3];
const salary  = process.argv[4];

function students(StudentName, qualification, salary){

    const data =`${StudentName} , ${qualification}, ${salary} \r\n`;


  
//for to write the file...............//


    // fs.writeFile("store.txt", data,(err, data) =>{

    //     console.log("saved to file")

    // })





////// for apend the file................//

    fs.appendFile("store.txt", data,(err, data) =>{

        console.log("saved to file")

    })
}



students(StudentName, qualification, salary)