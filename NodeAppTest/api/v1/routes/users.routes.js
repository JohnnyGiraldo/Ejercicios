const {Router} = require("express");
const userController = require('../../../controllers/userController');

//creamos el router para poder usar los vervos HTTP
const router = Router(); // llamamos el metodo Router de Express

router.get("/", userController.getAllUsers);

router.get('/:userId', userController.getUser);

router.post('/', userController.createUser);

router.put('/:userId', userController.updateUser);

router.delete('/:userId', userController.deleteUser);

module.exports = router;