const router = require('express').Router();
const { Task, User } = require('../../models');
const withAuth = require('../../utils/auth');

//get one task by id
router.get('/:id', withAuth, async (req, res) => {
    try {
      const taskData = await Task.findByPk(req.params.id, {
        include: [{ model: User }],
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'No task found with that ID!' });
        return;
      }
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //get tasks by Creator
  router.get('/creator/:taskCreator', withAuth, async (req, res) => {
    try {
      const taskData = await Task.findByPk(req.params.taskCreator, {
        include: [{ model: User }],
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

  //get tasks by Creator
  router.get('/taker/:taskTaker', withAuth, async (req, res) => {
    try {
      const taskData = await Task.findByPk(req.params.taskTaker, {
        include: [{ model: User }],
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

  router.get('/zipCode/:zipCode', withAuth, async (req, res) => {
    try {
      const taskData = await Task.findByPk(req.params.zipCode, {
        include: [{ model: User }],
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'No task found with that zipcode!' });
        return;
      }
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //new task
  router.post('/', withAuth, async (req, res) => {
    try {
      const newTask = await Task.create({
        ...req.body,
        taskCreator: req.session.user_id,
      });
  
      res.status(200).json(newTask);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  //update task id (through taskCreator)
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const taskData = await Task.update(req.body,{
        where: {
          taskCreator: req.params.taskCreator,
          user_id: req.session.user_id,
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

  //update task id (through taskTaker)
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const taskData = await Task.update(req.body,{
        where: {
          taskCreator: req.params.taskCreator,
          user_id: req.session.user_id,
        },
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'Unable to volunteer for task!' });
        return;
      }
  
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //delete task by id
  router.delete('/:id',async (req, res) => {
    try {
      const taskData = await Task.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'No task found with that id!' });
        return;
      }
  
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;