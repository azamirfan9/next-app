function migrate(){
    const Users = require('../model/User');
    const Schedule = require('../model/meeting/Schedule');
    try{
        console.log('Executing migration');
        console.log('Please wait');
        Users.sync();
        //Users.sync({ alter: true });
        Schedule.sync({ alter: true });
        console.log('Table has been created successfully');
    }catch(error){
        console.log(error);
    }
}
migrate();
