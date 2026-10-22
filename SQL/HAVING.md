employees
role	name	building	years_employed

1. 找出工作室里的艺术家人数（不使用HAVING子句）
```sql
SELECT COUNT(*) FROM employees
WHERE role = "Artist";
```
2. 找出工作室中每个岗位的员工人数。
```sql
SELECT role, COUNT(*) AS role_count FROM employees
GROUP BY role;
```
3. 计算所有工程师的总工作年限。
```sql
SELECT role, SUM(years_employed) FROM employees
GROUP BY role
HAVING role = "Engineer";
```