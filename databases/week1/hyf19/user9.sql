select user.name, task.title
from user  
left join task
user.id = task.user_id 
 