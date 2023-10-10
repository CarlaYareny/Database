const {request, response} = require('express')
const connection = require('../db');

const userslist = (req=request, res = response) =>{
try{
    connection.connect( (err) => {
        if (err){
            throw new Error(err);
        } else {

            //promise          .then().catch()
            //callback mysql
            //async ->await

            
            connection.execute('SELECT * FROM Users', (err, users) =>{
            if (err){
                throw new Error(err);
            }

            res.json(users);

           })
           
        }
    })
}   catch (error) {
     res.status(500).json ({msg: "Error connecting to MYSQL database"});
} finally {
    connection.end();
}
    
    
    
}

module.exports = {userslist};