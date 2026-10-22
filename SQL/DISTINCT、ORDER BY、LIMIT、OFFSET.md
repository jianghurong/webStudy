DISTINCT ORDER BY LIMIT OFFSET

id	title	director	year	length_minutes

1. List all directors of Pixar movies (alphabetically), without duplicates
```sql
SELECT DISTINCT director FROM movies
ORDER BY director ASC;
```
2. List the last four Pixar movies released (ordered from most recent to least)
```sql
SELECT * FROM movies
ORDER BY year DESC
LIMIT 4 OFFSET 0;
```
3. List the first five Pixar movies sorted alphabetically
```sql
SELECT * FROM movies
ORDER BY title ASC
LIMIT 5 OFFSET 0 ;
```
4. List the next five Pixar movies sorted alphabetically
```sql
SELECT * FROM movies
ORDER BY title ASC
LIMIT 5 offset 5;
```