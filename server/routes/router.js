import express from "express";
import { deleteUser, findUser, saveUser, updateUser } from "../controller/controller.js";
import { adduserRoute, edituserRoute, homeRoute } from "../services/render.js";
export const route = express.Router();

route.get("",homeRoute);

route.get("/add-user",adduserRoute);


route.get("/updateuser",edituserRoute);

//API

route.post("/api/users",saveUser);

route.put("/api/users/:id",updateUser);

route.delete("/api/users/:id",deleteUser);

route.get("/api/users",findUser);