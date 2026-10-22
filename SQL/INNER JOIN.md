movies
id	title	director	year	length_minutes
boxOffice
movie_id	rating	domestic_sales	international_sales

1. 找出每部电影的国内和国际票房。
```sql
SELECT title, domestic_sales, international_sales FROM movies
INNER JOIN boxOffice
ON movies.id = boxOffice.movie_id;
```
2. 列出每部国际票房优于国内票房的电影的票房数据。
```sql
SELECT title, domestic_sales, international_sales FROM movies
INNER JOIN boxOffice
ON movies.id = boxOffice.movie_id
WHERE international_sales > domestic_sales;
```
3. 请按评分降序排列所有电影
```sql
SELECT * FROM movies
INNER JOIN boxOffice
ON movies.id = boxOffice.movie_id
ORDER BY rating DESC;
```