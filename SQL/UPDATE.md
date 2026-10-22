movies
id	title	director	year	length_minutes

1. 《虫虫特工队》的导演信息有误，它实际上是由约翰·拉塞特执导的。
```sql
UPDATE movies
SET director = "John Lasseter"
WHERE title = "A Bug's Life";
```
2. 《玩具总动员2》的上映年份有误，它实际上是在1999年上映的。
```sql
UPDATE movies
SET year = 1999
WHERE title = "Toy Story 2";
```
3. 《玩具总动员8》的片名和导演都错了！正确的片名应该是《玩具总动员3》，导演是李·昂克里奇。
```sql
UPDATE movies
SET title = "Toy Story 3", director = "Lee Unkrich"
WHERE title = "Toy Story 8";
```

1. The director for A Bug's Life is incorrect, it was actually directed by John Lasseter
2. The year that Toy Story 2 was released is incorrect, it was actually released in 1999
3. Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich