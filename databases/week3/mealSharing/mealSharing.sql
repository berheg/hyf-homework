create database mealsharing;
use mealsharing;
CREATE TABLE `meal`(
`id` int(11)  unsigned NOT NULL AUTO_INCREMENT,
`title` varchar(45) DEFAULT NULL,
`description` text DEFAULT NULL,
`location` varchar(45) DEFAULT NULL,
`when` datetime default NULL,
`max_reservations` int(10) unsigned default NULL,
`price` decimal(5) default NULL,
`created_date` date not null,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `Reservation`(
`id` int(11)  unsigned NOT NULL AUTO_INCREMENT,
`number_of_guests` int(5) unsigned NULL,
`meal_id` int(11) unsigned NULL,
`created_date` date not null,
PRIMARY KEY (`id`),
constraint `fk_meal_id` foreign key (`meal_id`) references `meal`(`id`) on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE `Review`(
`id` int(11)  unsigned NOT NULL AUTO_INCREMENT,
`title` varchar(45) DEFAULT NULL,
`description` text DEFAULT NULL,
`review_meal_id` int(11) unsigned NULL,
`stars` int(10) unsigned default NULL,
`created_date` date not null,
PRIMARY KEY (`id`),
constraint `fk_review_meal_id` foreign key (`review_meal_id`) references `meal`(`id`) on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
use mealsharing;
SET @date = now();
-- meal table
insert into meal
	value( null, 'Kitfo','Ethiopian traditional food, beef, pepper, butter','Griffenfeldsgade 7, 2200 København','2019-01-12', 20, 150, @date);

insert into meal
	value(null, 'Mixed','Ethiopian traditional food, beef, pepper, butter,vegetable, cereals','Griffenfeldsgade 7, 2200 København','2019-02-23', 20, 125, @date);

insert into meal
	value(null, 'Vegan','Ethiopian traditional food, butter,vegetable, cereals','Griffenfeldsgade 7, 2200 København','2019-03-23', 20, 100, @date);
insert into meal
	value(null, 'frikadeller','Danish traditional, meatball,pork or a mix of beef and pork or fish, parsley sauce and potatoes','Griffenfeldsgade 7, 2200 København','2019-06-23', 20, 200, @date);
-- reservation table
insert into reservation(number_of_guests, meal_id, created_date)
	values( 20, 2, @date);
insert into reservation(number_of_guests, meal_id, created_date)
	values( 20, 1, @date); 
insert into reservation(number_of_guests, meal_id, created_date)
	values( 20, 3, @date); 
insert into reservation(number_of_guests, meal_id, created_date)
	values( 20, 4, now());   
-- review table
insert into review(title, description, review_meal_id, stars, created_date)
	values('Very Good','It is difficult to put into a few words how incredibly wonderful', '2', '4', @date);
insert into review(title, description, review_meal_id, stars, created_date)
	values('Very Good','It is difficult to put into a few words how incredibly wonderful', '1', '5', @date);
insert into review(title, description, review_meal_id, stars, created_date)
	values('Good','It is difficult to put into a few words how incredibly wonderful', '3', '6', @date);
insert into review(title, description, review_meal_id, stars, created_date)
	values('Good','It is difficult to put into a few words how incredibly wonderful', '4', '3', @date);

