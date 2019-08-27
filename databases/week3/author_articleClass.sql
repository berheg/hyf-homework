use newsp;
-- list all the authors who have more than 2 articles
SELECT author.name,
	COUNT(aa.article_id) as numOfArticle
FROM author 
JOIN author_article as aa
ON author.id = aa.author_id
group by aa.author_id
having numOfArticle > 2; 

-- 2. list authors who have articles more than 2 categories
SELECT author.name, COUNT(DISTINCT(category_article.category_id)) AS myCount
FROM author
INNER JOIN author_article ON author.id = author_article.author_id
INNER JOIN article ON author_article.article_id = article.id
INNER JOIN category_article ON category_article.article_id = article.id
GROUP BY author.id, author.name
HAVING  myCount > 2;
-- 3. list authors name, article title and category name
SELECT article.title, author.name, category.name as category_name 
FROM category
INNER JOIN category_article ON category.id = category_article.category_id
INNER JOIN article ON article.id = category_article.article_id
INNER JOIN author_article ON article.id = author_article.article_id
INNER JOIN author ON author.id = author_article.author_id;



-- 4. list authors name where no article   
SELECT author.name
FROM author
LEFT JOIN author_article ON author.id = author_article.author_id
 GROUP BY author.id, author.name
HAVING COUNT(author_article.article_id) = 0;
​
-- Alternative solution (without using group by)
​
SELECT author.name
FROM author
LEFT JOIN author_article ON author.id = author_article.author_id
WHERE author_article.article_id IS NULL;



