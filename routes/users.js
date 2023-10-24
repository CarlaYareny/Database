const {Router} = require('express');
const{userslist, listUserByID, addUser, deleteUser, updateUser} = require('../controllers/users');
const router = Router();
//localhost:3000/api/v1/users/
router.get('/', userslist);
router.get('/:id', listUserByID)
router.put('/', addUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;