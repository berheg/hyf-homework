-- 1
​
SELECT author.name, COUNT(author_article.article_id) AS art_count
FROM author
INNER JOIN author_article ON author.id = author_article.author_id
GROUP BY author.id, author.name
HAVING art_count > 2;
​
​
-- 2
SELECT author.name, COUNT(DISTINCT(category_article.category_id)) AS myCount
FROM author
INNER JOIN author_article ON author.id = author_article.author_id
INNER JOIN article ON author_article.article_id = article.id
INNER JOIN category_article ON category_article.article_id = article.id
GROUP BY author.id, author.name
HAVING  myCount > 2;
​
​
-- 3
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