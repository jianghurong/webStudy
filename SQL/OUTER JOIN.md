buildings
building_name	capacity

employees
role	name	building	years_employed

1. 找出所有有员工的建筑物列表。
```sql
SELECT DISTINCT building FROM employees;
```
2. 查找所有建筑物及其容量的列表
```sql
SELECT DISTINCT building_name, capacity FROM buildings;
```
3. 列出所有建筑物以及每栋建筑物中不同的员工岗位（包括空置建筑物）。
```sql
SELECT DISTINCT building_name, role FROM buildings
LEFT JOIN employees
ON building_name = building;
```