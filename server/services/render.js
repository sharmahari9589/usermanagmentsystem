import axios from "axios";

export const homeRoute = (req,res)=>{
    //get request to api
    axios.get("http://localhost:4000/api/users")
    .then((resp)=>{
        console.log(resp.data);
    res.render("index",{user:resp.data}); 
    })
    .catch((err)=>{
        res.send(err);
    })
}

export const adduserRoute = (req,res)=>{
 res.render("add_user");
}

export const edituserRoute = (req,res)=>{
  axios.get("http://localhost:4000/api/users",{params:{id:req.query.id}})
  .then((userdata)=>{
    res.render("update_user",{user:userdata.data})
  })
  .catch((err)=>{
    res.send(err)
  })
  }
