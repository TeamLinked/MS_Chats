const express = require('express');
const router = express.Router();

const Message=require('../models/message');

router.get('/', async(req,res)=>{
    const messages = await Message.find();
    res.send(messages);
});

router.post("/add", async(req,res)=>{
    const message= new Message(req.body);
    await message.save();
    res.send(message);
});

router.get('/find/:id1/:id2', async (req,res)=>{
    const {id1,id2} = req.params;
    const Messages= await Message.find({"transmitter":{"$in":[id1,id2]}, "receiver":{"$in":[id1,id2]}});
    res.send(Messages);
});

router.delete('/deletemess/:id', async(req,res)=>{
    const {id} = req.params;
    const answer=await Message.remove({"_id":id});
    res.send(answer);
});

router.delete('/delete/:id1/:id2', async(req,res)=>{
    const {id1,id2} = req.params;
    const answer=await Message.remove({"transmitter":id1, "receiver":id2});
    const answer2=await Message.remove({"transmitter":id2, "receiver":id1});
    res.send(answer);
});

module.exports=router;