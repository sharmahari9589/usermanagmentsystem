


// save user

import { StatusCodes } from "http-status-codes"
import { userModel } from "../model/model.js"
  export const saveUser = async(req,res)=>{
 
 // validate request
  if(!req.body){
    res.status(400).send({ message : "Content can not be emtpy!"});
    return;
}

// new user
const user = new userModel({
  name:req.body.name,
  email:req.body.email,
  gender:req.body.gender,
  status:req.body.status
})
console.log(user);
// save user in the database
user
    .save()
    .then(data => {
        // res.send(data)
        res.redirect('/add-user');
    })
    .catch(err =>{
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    });

  }
  
//   }
// update user

  export const updateUser = async(req,res)=>{
    console.log(req.params.id);
    const update = await userModel.findByIdAndUpdate(req.params.id,req.body)
    try {
        if(!req.params.id){
            res.status(StatusCodes.BAD_REQUEST).json({
                massage:"data not found"
            })
           }
           else{
            res.status(StatusCodes.OK).send()
           }
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            massage:"somethimng went wrong"
        })
    }  
   
  }

// delete user

  export const deleteUser = async(req,res)=>{
    try{
     const duser= await userModel.findByIdAndDelete(req.params.id);
     res.status(StatusCodes.NO_CONTENT).send();
  }
catch{
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        massage:"something went wrong"
    });
}
  }


// find user

  export const findUser = async(req,res)=>{
  if(req.query.id){
    try {
    const fuser = await userModel.findById(req.query.id);
     if(!fuser){
        res.status(StatusCodes.NOT_FOUND).json({
            massage:"user not found"
        });
     }    
     else{
        res.status(StatusCodes.OK).send(fuser);
     }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            massage:'server error'
        })
    }
  }
else{
    try {
        const searchuser= await userModel.find();
       res.status(StatusCodes.OK).send(searchuser);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            massage:"something went wrong"
        })
    }
}
}   