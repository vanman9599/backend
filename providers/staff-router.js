const Staff = require('./provider-model.js');
const express = require('express')
const router = express.Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const staff = await Staff.findStaffByProviderId(id);

        if(staff){
            res.json(staff);
        }else{
            res.status(404).json({ message: 'Could not find user with given id'})
        }

    }catch(err){
        res.status(500).json({ message: 'failed to get user '})
    }
})
router.post('/', async (req,res) => {
    const data = req.body;
    
    try{
        const staff = await Staff.insertStaff(data);
        res.status(201).json(staff)
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
        const staff = await Staff.findStaffById(id); //TODO Implment this function
        if(staff){
            const updatedStaff = await Staff.updateStaff(changes, id)
            res.json(updatedStaff);
        }else{
            res.status(404).json({ message: 'Could not find user with given Id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to update profile' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const deleted = await Staff.removeStaff(id);
        if(deleted){
            
                const deletedUser = await Staff.removeUser(id)
                res.json({ removed: deletedUser})
        }else{
            res.status(404).json({ message: 'Could not find user with given id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to delete user'})
    }
})

module.exports = router;