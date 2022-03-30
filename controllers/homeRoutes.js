const router = require("express").Router();
const { User, Task, Comment } = require("../models");
const withAuth = require("../utils/auth");
const { Op } = require("sequelize");
const { create } = require("../models/Task");

router.get("/", async (req, res) => {
  if (req.session.logged_in) {
    const commentData = await Comment.findAll();
    const comments = commentData.map((comment) => comment.get({ plain: true }));
    const userData = await User.findOne({where: {id: req.session.user_id}})
    const username = userData.dataValues.username
    const taskData = await Task.findAll({
      where: {
        [Op.or]: [
          { taskCreator: req.session.user_id },
          { taskTaker: req.session.user_id },
        ],
      },
    });

    const tasks = taskData.map((task) => task.get({ plain: true }));
    const createdTasks = tasks.filter(
      (task) => task.taskCreator == req.session.user_id
    );
    const takenTasks = tasks.filter(
      (task) => task.taskTaker == req.session.user_id
    );
    console.log(username)
    res.render("dashboard", {
      comments,
      username,
      createdTasks,
      takenTasks,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } else {
    res.render("homepage");
  }
});

module.exports = router;
