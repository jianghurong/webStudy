movies 
id	title	director	year	length_minutes

boxoffice 
movie_id	rating	domestic_sales	international_sales

1. 将该工作室的新作品《玩具总动员4》添加到电影列表中（可以使用任何导演）。
```sql
INSERT INTO movies
(id, title, director, year, length_minutes)
VALUES (15, "Toy Story 4", "a", 2003, 90);
```
2. 《玩具总动员4》上映后广受好评！评分高达8.7分，北美票房3.4亿美元，海外票房2.7亿美元。又一项纪录被载入史册BoxOffice。
```sql
INSERT INTO boxoffice
(movie_id, rating, domestic_sales, international_sales)
VALUES (15, 8.7, 340000000, 270000000);
```