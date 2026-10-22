示例
```sql
SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
FROM mytable
    JOIN another_table
      ON mytable.column = another_table.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    ORDER BY column ASC/DESC
    LIMIT count OFFSET COUNT;
```

movies 
id	title	director	year	length_minutes

boxoffice
movie_id	rating	domestic_sales	international_sales

1. 找出每位导演执导过的电影数量。
```sql
SELECT director, COUNT(*) FROM movies
GROUP BY director;
```
2. 找出每位导演负责的国内和国际销售总额。
```sql
select director, SUM(domestic_sales + international_sales) from movies
inner join boxoffice
on movies.id = movie_id
group by director;
```