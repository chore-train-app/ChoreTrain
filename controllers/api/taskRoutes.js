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
      const taskData = await Task.findAll(req.params.taskCreator);
  
      if (!taskData) {
        res.status(404).json({ message: 'No task found with that user!' });
        return;
      }

    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get tasks by taker
  router.get('/taker/:taskTaker', async (req, res) => {
    try {
      const taskData = await Task.findAll(req.params.taskTaker);
  
      if (!taskData) {
        res.status(404).json({ message: 'No task found with that user!' });
        return;
      }
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //find tasks by zipCode
  // Jesse: I tried messing with the code to show the localTasks handlebars
  // i'm sure i'm doing it wrong haha
  router.get('/zipCode/:zipCode', withAuth, async (req, res) => {
    try {
      const taskData = await Task.findByPk(req.params.zip_code, {
        include: [{ model: User }],
      },
      res.render('localTasks', taskData)
      );
  
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
  
  //update task by id (through taskCreator)
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const taskData = await Task.update(req.body,{
        where: {
          taskCreator: req.session.user_id,
        },
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'Unable to edit this task!' });
        return;
      }
  
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //Volunteer for task (through taskTaker)
  router.put('/Volunteer/:id', withAuth, async (req, res) => {
    try {
      const taskData = await Task.update({
        status: true,
        taskTaker: req.session.user_id,
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

  //Cancel Volunteering for task (through taskTaker)
  router.put('/VolunteerCancel/:id', withAuth, async (req, res) => {
    try {
      const taskData = await Task.update({
        status: false,
      },{
        where: {
          taskTaker: req.session.user_id,
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
          taskCreator: req.session.user_id,
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
  
  //update comment
  router.put('/:id', async (req, res) => {
    try {
      const taskData = await Task.update({
        comment: req.body,
      });
  
      if (!taskData) {
        res.status(404).json({ message: 'Unable to comment on this task!' });
        return;
      }
  
      res.status(200).json(taskData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;