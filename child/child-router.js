const Children = require('./child-model.js');
const express = require('express')
const router = express.Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const child = await Children.findById(id);

        if(child){
            res.json(child);
        }else{
            res.status(404).json({ message: 'Could not find child with given id'})
        }

    }catch(err){
        
        res.status(500).json({ message: 'failed to get child'})
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
        const child = await Children.insert(data);
        res.status(201).json(child)
    }catch(err){
        console.log('data', data);
        console.log("error", err);
        res.status(500).json({ message: "Failed to create child profile"})
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try{
        const child = await Children.findById(id); //TODO Implment this function
        if(child){
            const updatedChild = await Children.update(changes, id)
            res.json(updatedChild);
        }else{
            res.status(404).json({ message: 'Could not find child with given Id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to update child' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const deleted = await Children.remove(id);
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