// const router = require("express").Router();
// const { User } = require('../models')

// router.get("/", async (req, res) => {
//   try {
//     res.render("homepage", {
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

const router = require("express").Router();
const { User, Task } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  if (req.session.logged_in) {

    const taskData = await Task.findAll({
      where: {
        taskCreator: req.session.user_id
      }
    });
    const tasks = taskData.map((task) => task.get ({plain: true}))

    console.log(tasks, req.session.logged_in);
    res.render("dashboard", {
      logged_in: req.session.logged_in,
      tasks: tasks,
      user_id: req.session.user_id
    });
  } else {
    res.render("homepage");
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
