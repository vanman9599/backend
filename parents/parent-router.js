const Parents = require('./parent-model.js');
const express = require('express')
const router = express.Router();

router.post('/', async (req,res) => {
    const data = req.body;
    
    try{
        const parent = await Parents.insert(data);
        res.status(201).json(parent)
    }catch(err){
        console.log('data', data);
        console.log("error", err);
        res.status(500).json({ message: "Failed to create profile"})
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try{
        const parent = await Parents.findById(id); //TODO Implment this function
        if(parent){
            const updatedParent = await Parents.update(changes, id)
            res.json(updatedParent);
        }else{
            res.status(404).json({ message: 'Could not find user with given Id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to update user' })
    }
})

module.exports = router;