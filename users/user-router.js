const Users = require('./user-model.js');
const express = require('express')
const router = express.Router();

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try{
        const user = await Users.findById(id); //TODO Implment this function
        if(user){
            const updatedUser = await Users.update(changes, id)
            res.json(updatedUser);
        }else{
            res.status(404).json({ message: 'Could not find user with given Id'})
        }
    }catch(err){
        console.log("error", err);
        res.status(500).json({ message: 'failed to update user' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const deleted = await Users.remove(id);
        if(deleted){
          res.json({ removed: deleted })
        }else{
            res.status(404).json({ message: 'Could not find user with given id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to delete user'})
    }
})

module.exports = router;