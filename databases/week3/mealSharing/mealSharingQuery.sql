use mealsharing;

-- Get all meals
select * from meal;
-- Add a new meal
insert into meal
	value(null,'Rød grød med fløde','Danish typical meal','Griffenfeldsgade 7, 2200 København','2019-06-12 23:30:20', 15, 200, now());
-- Get a meal with any id, fx 1
select * from meal
where id = 2;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal
	set title = 'Chicken Roasted',
		max_reservations = '14'
	where id = 5;
-- Delete a meal with any id, fx 1
   delete from meal
		where id = 5;
 -- Get all reviews
 select * from review;
-- Add a new review
insert into review(title, description, review_meal_id, stars, created_date)
	values('Delicious','I am in love with this food, sure will come again',6, 7, now());
-- Get a review with any id, fx 1
select * from review
	where id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review
	set title = 'Special meal',
		description = 'I have not tasted such incredible and healthy meal before',
        stars = 8
	where id = 2;
-- Delete a review with any id, fx 1  
delete from review
	where id = 4;
    
-- Get meals that has a price smaller than a specific price fx 90
select * from meal
	where price < 150;
-- Get meals that still has available reservations
select meal.title, reservation.created_date as reservation_date
 from meal
 inner join reservation on reservation.meal_id = meal.id
	where reservation.created_date > now();
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT *   
FROM meal   
WHERE meal.title like '%Rød grød%';
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
select meal.title,number_of_guests,reservation.created_date 
from reservation
inner join meal on meal.id = reservation.meal_id
where meal.id = 2
ORDER BY reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews 
select meal.title, AVG(review.stars) as starAVG 
from meal 
inner join review on review.review_meal_id = meal.id
group by meal.title
 ORDER BY starAVG ASC;  