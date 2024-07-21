const express = require("express");
const router = express.Router();

const tasks = require("../data/users");

router
.route("/")
.get((req, res) => {
  res.render('indexview',{title:'ToDo List Page',tasks},
  );
  
});
router
.route("/form")
.get((req, res) => {
  res.render('form', { title: 'Add Task' });
});
router
.route("/formd")
.get((req, res) => {
  res.render('formd', { title: 'Delete Task' });
});
router
.route("/submit")
.post((req, res) => {
  
      if (req.body.task) {
        if (tasks.find((u) => u.name == req.body.task)) {
          res.json({ error: "Name Already Added" });
          return;
        }
        const ta = {
          id: tasks[tasks.length - 1].id + 1,
          name: req.body.task,
          list: req.body.task
         
        };
  
        tasks.push(ta);
        //tasks.push(task);
        res.redirect('/');
        //res.json(users[users.length - 1]);
      } else res.status(400).render('form', { title: 'Add Task', error: 'Task is required' });
});

router
  .route("/:id")
  .get((req, res, next) => {
    const user = tasks.find((u) => u.id == req.params.id);
    if (user) res.json(user);
    else next();
  })

 router
  .route("/de/:id")
  .delete((req, res, next) => {
    const user = tasks.find((u, i) => {
      if (u.id == req.params.id) {
        tasks.splice(i, 1);
        return true;
      }
    });

    if (user) res.json(user);
    else next();
  });
 router
 .route("/pa/:id")
  .patch((req, res, next) => {
    const user = tasks.find((u, i) => {
      if (u.id == req.params.id) {
        for (const key in req.body) {
          tasks[i][key] = req.body[key];
        }
        return true;
      }
    });

    if (user) res.json(user);
    else next();
  })
  
module.exports = router;
