SELECT * FROM hyf19.task;
use hyf19;
update task
	inner join 
		status on status.name = 'Done'     
	set task.status_id = status.id
	where task.id = 1;
update status
	set status.name = 'In progress'
		where id = 2;
update task
	inner join
		status on status.name = 'In progress'
	set task.status_id = status.id		
		where task.id = 2;