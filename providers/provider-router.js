const Providers = require('./provider-model.js');
const express = require('express')
const router = express.Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const provider = await Providers.findById(id);

        if(provider){
            res.json(provider);
        }else{
            res.status(404).json({ message: 'Could not find provider with given id'})
        }

    }catch(err){
        
        res.status(500).json({ message: 'failed to get child'})
    }
})

router.get('/children/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const provider = await Providers.getProvidersChildren(id);

        if(provider){
            res.json(provider);
        }else{
            res.status(404).json({ message: 'Could not find provider with given id'})
        }

    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'failed to get children for this provider'})
    }
})

// //send in parentId to get array of children of parent
// router.get('/children/:id', async (req, res) => {
//     const { id } = req.params;
//     try{
//         const children = await Parents.findChildren(id);

//         if(children){
//             res.json(children);
//         }else{
//             res.status(404).json({ message: 'Could not find childen with given id'})
//         }

//     }catch(err){
        
//         res.status(500).json({ message: 'failed to get children'})
//     }
// })

router.post('/', async (req,res) => {
    const data = req.body;
    
    try{
        const provider = await Providers.insert(data);
        res.status(201).json(provider)
    }catch(err){
        console.log('data', data);
        console.log("error", err);
        res.status(500).json({ message: "Failed to create provider"})
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try{
        const provider = await Providers.findById(id); //TODO Implment this function
        if(provider){
            const updatedProvider = await Providers.update(changes, id)
            res.json(updatedProvider);
        }else{
            res.status(404).json({ message: 'Could not find provider with given Id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to update provider' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const deleted = await Providers.remove(id);
        if(deleted){
          res.json({ removed: deleted })
        }else{
            res.status(404).json({ message: 'Could not find provider with given id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to delete provider'})
    }
})

module.exports = router;