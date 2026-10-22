buildings
building_name	capacity

employees
role	name	building	years_employed

1. 找出所有未被分配到任何建筑物的员工的姓名和职务。
```sql
SELECT name, role FROM employees
WHERE building IS NULL;
```
2. 找出所有没有员工的建筑物名称。
```sql
SELECT DISTINCT building_name FROM buildings
LEFT JOIN employees
ON building_name = building
WHERE name IS NULL;
```