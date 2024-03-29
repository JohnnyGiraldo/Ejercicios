/*const db = require('../../../models');
const {Router} = require('express');
const router = Router();*/

//Método GET

/*router.get('/', (req ,res)=>{
    res.send({Title: 'hello USERS'});
});*/

/*router.get('/', async(req, res)=>{
    try{
        let users = await db.User.findAll();
        res.status(200).send({Datass:users,Msg:'Success'});
    }catch(error){
        res.status(400).send({Data:null,Msg:'Users error'});
    }
});


router.get('/:id', async(req, res)=>{
    try {
        let id = req.params.id;
        let user = await db.User.findByPk(id);
        res.status(200).send({Data:user,Msg:'Success'})
    }catch{
        res.status(400).send({Data:null,Msg:'Users error'})
    }
});
//Método POST
router.post('/', async (req, res)=> {
    // let name = req.body.name;
    // let email = req.body.email;
    // let password = req.body.password;
    let {name, email, password} = req.body;
    try{
        await db.User.create({
            name,
            email,
            password,
        });
        res.status(200).send({Msg:'User created'});
    }catch(error){
        res.status(400).send({Msg:'User Not created'});
    }
})

//Método PUT - actualizar
router.put('/:id', async (req, res)=> {
    try{
        let id = req.params.id;
        let {name, email, password} = req.body;
        let user = await db.User.update(
            {name, email, password},{where:{id}}
        );
        res.status(200).send({Data:user,Msg:'User updated'})
    }catch{
        res.status(400).send({Data:null,Msg:'Error updating user'});
    }
});

//Método DELETE

router.delete('/:id', async (req, res)=> {
    try{
        let id = req.params.id;
        let user = await db.User.destroy({
            where:{id}
        });
        res.status(200).send({Data:user,Msg:'User delete'})
    }catch{
        res.status(400).send({Data:null,Msg:'Error deleting user'});
    }
});

module.exports = router;*/

// cambio a página 5 del pdf
