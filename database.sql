CREATE TABLE to_do_list (
id serial PRIMARY KEY, 
task_name VARCHAR(50) NOT NULL,
task_details VARCHAR(1000) NOT NULL,
task_completed BOOLEAN default false
);

INSERT INTO to_do_list ("task_name", "task_details", "task_completed")
VALUES ('Wash Car', 'Use the turtlewax!', false);