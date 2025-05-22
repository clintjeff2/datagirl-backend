const {
	createUser,
	getUser,
	getAllUsers,
	updateUser,
} = require('./../controllers/user.controller');
const express = require('express');

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
// router.delete('/', somthing)
router.get('/:id', getUser);
router.patch('/:id', updateUser);

// router.route('/').post(createUser).get(getAllUsers).delete(somthing);
// router.route('/:id').get(getUser).patch(updateUser)

module.exports = router;
