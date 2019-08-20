select user.name, 
count(task.id) as myCount 
from task 
inner join user on 
task.user_id = user.id
 group by user_id having mycount > 2