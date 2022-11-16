import { Router } from "express";
import Task from "../models/Task";
import {
renderTasks,
createTask,
ediTask,
editRender,
deleteTask,
unDone}
        from '../controllers/tasks.controller.js'
const router = Router();

//ROUTES GET / post

router.get("/", renderTasks);

router.post("/tasks/add", createTask );

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit/:id", ediTask );

router.post("/edit/:id", editRender);


router.get('/delete/:id' , deleteTask);

router.get('/toggleDone/:id', unDone)





export default router;
