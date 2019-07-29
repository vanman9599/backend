const Immunizations = require('./immunization-model.js');
const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
    
    try{
        const immun = await Immunizations.findAll();

        if(immun){
            res.json(immun);
        }else{
            res.status(404).json({ message: 'Could not find immunizations'})
        }

    }catch(err){
        
        res.status(500).json({ message: 'failed to get immunizations'})
    }
})

router.get('/age', async (req, res) => {
    
    try{
        const immun = await Immunizations.findImmunizationsByAge();

        if(immun){
            res.json(immun);
        }else{
            res.status(404).json({ message: 'Could not find immunizations'})
        }

    }catch(err){
        
        res.status(500).json({ message: 'failed to get immunizations'})
    }
})

//get immunizatios for each child
router.get('/child/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const immunizations = await Immunizations.findChildImmunizations(id);

        if(immunizations){ 
            res.json(immunizations);
        }else{
            res.status(404).json({ message: 'Could not find childen with given id'})
        }

    }catch(err){
        console.log("error", err)
        res.status(500).json({ message: 'failed to get children'})
    }
})
//find all taken immunizations for a given child
router.get('/taken/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const immunizations = await Immunizations.findImmunizationsTaken(id);

        if(immunizations){ 
            res.json(immunizations);
        }else{
            res.status(404).json({ message: 'Could not find any immuninzations for this child'})
        }

    }catch(err){
        console.log("error", err)
        res.status(500).json({ message: 'failed to get children'})
    }
})


router.get('/missing/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const immunizations = await Immunizations.findMissingImmunizations(id);

        if(immunizations){ 
            res.json(immunizations);
        }else{
            res.status(404).json({ message: 'Could not find any immuninzations for this child'})
        }

    }catch(err){
        console.log("error", err)
        res.status(500).json({ message: 'failed to get children'})
    }
})

router.post('/', async (req,res) => {
    const data = req.body;
    
    try{
        const immun = await Immunizations.insert(data);
        res.status(201).json(immun)
    }catch(err){
        console.log('data', data);
        console.log("error", err);
        res.status(500).json({ message: "Failed to insert immunization"})
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try{
        const immun = await Immunizations.findById(id); //TODO Implment this function
        if(immun){
            const updated = await Immunizations.update(changes, id)
            res.json(updated);
        }else{
            res.status(404).json({ message: 'Could not find immunizaions with given Id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to update immunizaion' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const deleted = await Immunizations.remove(id);
        if(deleted){
            const deletedImmun = await Immunizations.removeUser(id);
            if(deletedImmun){
                res.json({ removed: deleted })
            }else{
                res.status(500).json({ message: 'failed to delele immunization '})
            }
            
        }else{
            res.status(404).json({ message: 'Could not find immunization with given id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to delete'})
    }
})

module.exports = router;