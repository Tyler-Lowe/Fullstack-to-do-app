import React from "react";

// do a post here with form data this post should call the newtaskcontainer function that will do a get request and populate todo item


export default function TaskCreator() {
    return (
<form action="">
    <input type="text" placeholder="Task Name" />
    <input type="text" placeholder="Task Details" />
    <input type="submit" value={'Add Task'} />
    {/* are we seen? */}
</form>
    )
}



