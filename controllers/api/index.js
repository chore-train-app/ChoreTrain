const router = require('express').Router();

const userRoutes = require('./userRoutes');
const trainRoutes = require('./trainRoutes');
const taskRoutes = require('./taskRoutes')

router.use('/users', userRoutes);
router.use('/trains', trainRoutes);
router.use('/tasks', taskRoutes);


module.exports = router;