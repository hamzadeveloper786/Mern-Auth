import express from 'express';
import { ObjectId } from 'mongodb';
import {client} from './../mongodb.mjs';
const db = client.db("crudop").collection("users");
let router = express.Router();

router.get('/profile', async (req, res, next) =>{
    try{
    let profile = await db.findOne({email : req.body.decoded.email})
    res.status(200).send({
        message: "Profile fetched successfully!",
        data:{
            isAdmin: profile.isAdmin,
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
        }
    });
}catch(e){
    console.log("Server Error!", e)
    res.status(500).send("Server Error!");
}
})

export default router;