import express, { response } from 'express';
import db from "../mockdb/index.js";

const router = express.Router();


router.get("/:id?", async (req, res, next) => {
    try {
       // Get list of users
       const { id } = req.params;
       let data;
       if (id){
        data = await db.getOne(id);
       } else {
        data = await db.getAll();
       }
       res.json(data);
    } catch (error) {
       next(error);
    }
 })

 router.post("/", async (req, res, next) => {
    try {
        let data;
       // Post new users
       if(req.body){
        let newUser = req.body;
        data = await db.add(newUser);
       }
       res.json(data);
    } catch (error) {
       next(error);
    }
 })

 router.put("/:id", async (req, res, next) => {
    try {
        let data;
       // update users
       const { id } = req.params;
       let updatedUser = req.body;
       data = await db.update(id, updatedUser);
       res.json(data);
    } catch (error) {
       next(error);
    }
 })

 router.delete("/:id", async (req, res, next) => {
    const { id } = req.params;
    let data;
    if(id){
        data = await db.remove(id);
    }
    res.json(data);
    try {
       // TODO
    } catch (error) {
       next(error);
    }
 })


export default router;