const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    const queryText = `
    SELECT * FROM "to_do_list";
    `;
    pool.query(queryText)
    .then((result) => {
        console.log(`Got stuff back from DB`, result);
        res.send(result.rows)
    })
    .catch((error) => {
        console.log(`Error making DB query`, error);
        res.sendStatus(500);
    })
})


// POST
router.post('/', (req, res) => {
    const toDoForm = req.body;
    console.log('adding this task',toDoForm);
    const queryText = `
    INSERT INTO to_do_list (task_name, task_details)
    VALUES ($1, $2);
    `;
    pool.query(queryText, [toDoForm.taskName, toDoForm.taskDetails])
    .then((result) => {
        console.log(`Added task to the db`, toDoForm);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error making db query ${queryText}`, error);
        res.send(500);
    })
})
// PUT

router.put('/:id', (req, res) => {
    let updatedTask = req.body;
    console.log('Updated Task', req);
    let taskID = req.params.id;
    let queryText = `
    UPDATE "to_do_list" SET "task_completed"='true' WHERE id=$1;
    `;
    pool.query(queryText, [updatedTask.taskID])
    .then(() => {
        res.sendStatus(204)
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})


// DELETE

module.exports = router;
