use hyf19;
select * from task;
select * from status;
--- 1. Add a task with the these attributes: title, description, created, updated, dueDate, statusID, userID
insert into task 
	(title, description, created, updated, due_date, status_id, user_id) 
		values ('${title}', '${description}', '${created}', '${updated}', '${dueDate}', statusID, userID);

--- 2. Change the title of a task with these attributes: taskID, newTitle
update task 
	set title = '${newTitle}' 
		where id = taskID;

--- 3. Change the task due date with these attributes: taskID, newDueDate
update task 
	set due_date = '${newDueDate}' 
		where id = taskID;

 --- 4. Change the task status with these attributes: taskID, newStatus
update task
	inner join 
		status on  status.name = '${newStatus}'
	set task.status_id = status.id 
		where task.id = taskID;

--- 5. Mark a task as complete with this attribute: taskID
update task 
	inner join 
		status on status.name = 'Done'
	set task.status_id = status.id 
		where task.id = taskID;

--- 6. Delete task with this attribute: taskID
delete from task 
	where id = taskID;