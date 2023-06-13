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
    let updatedTask = req.params.id;
    console.log('Show me the light',updatedTask);
    // console.log('Updated Task', updatedTask);
    // let taskID = req.params.id;
    // console.log('Here is the taskID',taskID);
    let queryText = `
    UPDATE to_do_list SET task_completed = NOT task_completed WHERE id = $1;
    `;
    pool.query(queryText, [updatedTask])
    .then(() => {
        res.sendStatus(204)
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})


// DELETE

router.delete('/:id', (req, res) => {// used id to get the id in the table in postico
    let itemId = req.params.id;//to get the parameter of each id
    let queryDelete = `
    DELETE FROM "to_do_list" WHERE id = $1;
    `;//deletes
    pool.query(queryDelete, [itemId])
    .then(() => {
        res.sendStatus(204)
    })
    .catch((error) => {
        console.error(error);
        res.sendStatus(500);
    })
})//DELETES ends


module.exports = router;
