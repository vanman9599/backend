const Parents = require('./parent-model.js');
const express = require('express')
const router = express.Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const parent = await Parents.findById(id);

        if(parent){
            res.json(parent);
        }else{
            res.status(404).json({ message: 'Could not find use with given id'})
        }

    }catch(err){
        
        res.status(500).json({ message: 'failed to get user'})
    }
})

//send in parentId to get array of children of parent
router.get('/children/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const children = await Parents.findChildren(id);

        if(children){ 
            res.json(children);
        }else{
            res.status(404).json({ message: 'Could not find childen with given id'})
        }

    }catch(err){
        
        res.status(500).json({ message: 'failed to get children'})
    }
})

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
    const { username, email, firstName, lastName, address1, address2, city, state, zip, phone, comments  } = req.body;

    const userObject = {
        "username": username, 
        "email": email
    }

    const parentObject = {
        "firstName": firstName, 
        "lastName": lastName, 
        "address1": address1, 
        "address2": address2,
        "city": city, 
        "state": state, 
        "zip": zip, 
        "phone": phone, 
        "comments": comments, 
        "userId": id
    }
    try{
         //TODO Implment this function
        
            const updatedParent = await Parents.update(parentObject, id)
            const updatedUser = await Parents.updateUser(userObject, id)
            const { username, email } = updatedUser;
            const { firstName, lastName, address1, address2, city, state, zip, phone, comments } = updatedParent;
            const returnObject = 
            {  
            "username": username, 
                 "email": email, 
                 "userId": id, 
                 "firstName": firstName,
                 "lastName": lastName,
                 "address1": address1, 
                 "address2": address2, 
                 "city": city, 
                 "state": state, 
                 "zip": zip, 
                 "phone": phone, 
                 "comments": comments 

            }
            res.json(returnObject);
        
    }catch(err){
        console.log(err); 
        res.status(500).json({ message: 'failed to update user' })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const deleted = await Parents.remove(id);
        if(deleted){
            const deletedUser = await Parents.removeUser(id);
            if(deletedUser){
                res.json({ removed: deleted })
            }else{
                res.status(500).json({ message: 'failed to delele user'})
            }
            
        }else{
            res.status(404).json({ message: 'Could not find user with given id'})
        }
    }catch(err){
        res.status(500).json({ message: 'failed to delete user'})
    }
})

module.exports = router;