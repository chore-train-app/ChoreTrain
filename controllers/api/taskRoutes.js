const router = require('express').Router();
const { Train, Task, User } = require('../../models');

//get one task by name
router.get('/:name', async (req, res) => {
    try {
      const taskData = await Task.findByPk(req.params.name, {
        include: [{ model: User },{ model: Train }],
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'No task found with that name!' });
        return;
      }
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get tasks by user
  router.get('/:taskCreator', async (req, res) => {
    try {
      const taskData = await Task.findByPk(req.params.taskCreator, {
        include: [{ model: User },{ model: Train }],
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'No task found with that user!' });
        return;
      }
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //new task
  router.post('/', async (req, res) => {
    try {
      const taskData = await Task.create(req.body);
      res.status(200).json(taskData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  //update task by taskTaker
  router.put('/:taskTaker', async (req, res) => {
    try {
      const taskData = await Task.update(req.body,{
        where: {
          id: req.params.taskTaker,
        },
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'No user found with that name!' });
        return;
      }
  
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //update train by status
  router.put('/:status', async (req, res) => {
    try {
      const taskData = await Task.update(req.body,{
        where: {
          id: req.params.status,
        },
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'Unable to change status!' });
        return;
      }
  
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //delete task by name
  router.delete('/:name',async (req, res) => {
    try {
      const taskData = await Task.destroy({
        where: {
          id: req.params.name,
        },
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'No task found with that name!' });
        return;
      }
  
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;