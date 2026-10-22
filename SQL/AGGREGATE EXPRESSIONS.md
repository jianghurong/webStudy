employees
role	name	building	years_employed

1. 找出员工在工作室工作时间最长的记录。
```sql
SELECT MAX(years_employed) AS max_years_employed
FROM employees;
```
2. 对于每个职位，计算担任该职位的员工的平均工作年限。
```sql
SELECT role, AVG(years_employed) AS avg_years_employed
FROM employees;
GROUP BY role
```
3. 计算每栋建筑中员工的总工作年限。
```sql
SELECT building, SUM(years_employed) AS sum_years_employed
FROM employees
GROUP BY building;
```

常用聚合函数
COUNT()、MIN()、MAX()、AVG()、SUM()
GROUP BY()