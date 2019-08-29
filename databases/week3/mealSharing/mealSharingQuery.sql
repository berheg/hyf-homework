use mealsharing;

-- Get all meals
select * from meal;
-- Add a new meal
insert into meal(title, description, location, when, max_reservations, price, created_date)
	value('${title}','${description}','${location}','${when}', ${max_reservations}, ${price}, now());
-- Get a meal with any id, fx 1
select * from meal
where id = 2;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal
	set title = '${newTitle}',
		max_reservations = '${newMaxReservation}'
	where id = 5;
-- Delete a meal with any id, fx 1
   delete from meal
		where id = 5;
 -- Get all reviews
 select * from review;
-- Add a new review
insert into review(title, description, review_meal_id, stars, created_date)
	values('${title}','${description}', review_meal_id, stars, '${created_date}');
-- Get a review with any id, fx 1
select * from review
	where id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review
	set title = '${newTitle}',
		description = '${description}',
        stars = ${stars}
	where id = 2;
-- Delete a review with any id, fx 1  
delete from review
	where id = 4;
    
-- Get meals that has a price smaller than a specific price fx 90
select * from meal
	where price < 150;
-- Get meals that still has available reservations
select meal.title
 from meal
 inner join reservation on reservation.meal_id = meal.id
	where reservation.created_date = SYSUTCDATETIME ( );
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SET @searchWord = 'Rod grod';
SELECT meal.title   
FROM meal   
WHERE CONTAINS(meal.title, @SearchWord);
-- Get meals that has been created between two dates

-- Get only specific number of meals fx return only 5 meals
select * from meal
limit 5;
-- Get the meals that have good reviews
select meal.title 
from meal 
inner join review on review.title = 'good'
where meal.id = review.review_meal_id;
-- Get reservations for a specific meal sorted by created_date
select * from reservation
ORDER BY created_date ASC
-- Sort all meals by average number of stars in the reviews 
select meal.title, review.stars as starAVG 
from meal 
inner join review on review.review_meal_id = meal.id
 ORDER BY starAVG ASC;  