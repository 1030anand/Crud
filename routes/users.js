const express = require('express')
// const student = require('../models/student')
const router = express.Router()
const Users = require('../models/user')


router.get('/', async(req,res) => {            // to get all
    try{
           const users = await Users.find()
           res.json(users)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {         // to get single id
    try{
           const user = await Users.findById(req.params.id)
           res.json(user)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const users = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        city: req.body.city,
        state: req.body.state,
        address: req.body.address,
        phone: req.body.phone,

    })

    try{
        const ss =  await users.save() 
        res.json(ss)
    }catch(err){
        res.send('Error')
    }
})
router.patch('/:id', async(req, res) => {
    try{
        const user = await Users.findById(req.params.id)
        user.firstname = req.body.firstname
        user.lastname= req.body.lastname,
        user.email= req.body.email,
        user.city= req.body.city,
        user.state= req.body.state,
        user.address= req.body.address,
        user.phone= req.body.phone
        const a1 = await user.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
   
   })
router.delete('/:id',async (req,res) => {                 // to remove perticular id
 
    try {

        const user = await Users.findById(req.params.id)

        const sd = await user.remove()

        res.json(sd);

    }

    catch(err){

        res.send('Error'+ err)

    }

})

module.exports = router