const handleRegister=(req,res,db)=>{    
    const{vehnum,vehtype,vehmodel,phnum,name,checkin}=req.body;
         db('users')
            .returning('*')
            .insert({
                vehnum:vehnum,
                vehtype:vehtype,
                vehmodel:vehmodel,
                phnum:phnum,
                name:name,
                checkin:checkin
            })  
            .then(user=>{
                res.json('Checked in successfully');
            })
            .catch(err=>res.status(400).json('Unable to register'))
}

module.exports={
    handleRegister:handleRegister
};

