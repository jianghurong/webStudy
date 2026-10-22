Id Title Director Year Length_minutes

1. Find all the Toy Story movies
```sql
SELECT * FROM movies WHERE Title LIKE '%Toy Story%';
```

2. Find all the movies directed by John Lasseter
```sql
SELECT * FROM movies WHERE Director = 'John Lasseter';
```

3. Find all the movies (and director) not directed by John Lasseter
```sql
SELECT * FROM movies WHERE Director != 'John Lasseter';
```

4. Find all the WALL-* movies
```sql
SELECT * FROM movies WHERE Title LIKE 'WALL-_';
```