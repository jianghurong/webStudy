movies
id	title	director	year	length_minutes
boxOffice
movie_id	rating	domestic_sales	international_sales


1. 列出所有电影及其总票房（单位：百万美元）。
```sql
SELECT *, (domestic_sales + international_sales) / 1000000 AS total_sales FROM movies
LEFT JOIN boxOffice
ON movies.id = boxOffice.movie_id;
```
2. 列出所有电影及其评分（百分比）。
```sql
SELECT *, rating * 10 AS ratingRate FROM movies
LEFT JOIN boxOffice
ON movies.id = boxOffice.movie_id;
```
3. 列出所有在偶数年上映的电影
```sql
SELECT * FROM movies
WHERE year % 2 = 0;
```