const router = require('express').Router();
const { Train, Task, User } = require('../../models');


//get one train by name
router.get('/:name', async (req, res) => {
  try {
    const trainData = await Train.findByPk(req.params.name, {
      include: [{ model: User },{ model: Task }],
    });

    if (!trainData) {
      res.status(404).json({ message: 'No train found with that name!' });
      return;
    }
    res.status(200).json(trainData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get trains by user
router.get('/:trainCreator', async (req, res) => {
  try {
    const trainData = await Train.findByPk(req.params.trainCreator, {
      include: [{ model: User },{ model: Task }],
    });

    if (!trainData) {
      res.status(404).json({ message: 'No train found with that user!' });
      return;
    }
    res.status(200).json(trainData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//new train
router.post('/', async (req, res) => {
  try {
    const trainData = await Train.create(req.body);
    res.status(200).json(trainData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update train by guestList
router.put('/:guestList', async (req, res) => {
  try {
    const trainData = await Train.update(req.body,{
      where: {
        id: req.params.guestList,
      },
    });

    if (!trainData) {
      res.status(404).json({ message: 'No guest found with that name!' });
      return;
    }

    res.status(200).json(trainData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update train by status
router.put('/:status', async (req, res) => {
  try {
    const trainData = await Train.update(req.body,{
      where: {
        id: req.params.status,
      },
    });

    if (!trainData) {
      res.status(404).json({ message: 'Unable to change status!' });
      return;
    }

    res.status(200).json(trainData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete train by name
router.delete('/:name',async (req, res) => {
  try {
    const trainData = await Train.destroy({
      where: {
        id: req.params.name,
      },
    });

    if (!trainData) {
      res.status(404).json({ message: 'No train found with that name!' });
      return;
    }

    res.status(200).json(trainData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;