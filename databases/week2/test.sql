SELECT * FROM hyf19.task;
use hyf19;
update task
	inner join 
		status on   task.status_id = status.id     
	set task.status_id = status.id
	where status.name = 'Done' and
		  task.id = 1;
update status
	set status.name = 'In progress'
		where id = 2;
update task
	inner join 
		status on status.id = task.status_id
	set task.status_id = status.id 
		where status.name = '${newStatus}' and task.id = '${taskID}';