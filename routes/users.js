const {Router} = require('express');
const{userslist} = require('../controllers/users');
const router = Router();
//localhost:3000/api/v1/users/
router.get('/', userslist);

module.exports = router;