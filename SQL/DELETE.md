movies
id	title	director	year	length_minutes

1. 这个数据库太大了，让我们删除所有2005 年之前上映的电影。
```sql
DELETE FROM movies
WHERE year < 2005;
```
2. 安德鲁·斯坦顿也已离开工作室，所以请删除所有他执导的电影。
```sql
DELETE FROM movies
WHERE director = "Andrew Stanton";
```