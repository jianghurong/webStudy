# 子查询（Subqueries）

参考：[SQLBolt - Subqueries](https://sqlbolt.com/topic/subqueries)

有些问题，一条简单的 `SELECT` 算不完，要先算出一个中间结果，再用它继续查。  
这时可以把「里面那一小段查询」嵌进大查询里，这就是**子查询**。

子查询要用 `()` 包起来。

---

## 1. 普通子查询（先算一次，外面再用）

场景：销售员工有「创造的营收」和「工资」。想找出：**工资 > 全员平均营收** 的人。

先单独算平均营收：

```sql
SELECT AVG(revenue_generated) FROM sales_associates;
```

再把它塞进 `WHERE`：

```sql
SELECT *
FROM sales_associates
WHERE salary > (
  SELECT AVG(revenue_generated) FROM sales_associates
);
```

理解：括号里先算出一个数（平均营收），外面每一行拿自己的 `salary` 去和这个数比。

子查询还能出现在：

- `WHERE` / `HAVING`：当条件用
- `FROM`：当临时表，还能 `JOIN`
- `SELECT`：当某一列的值

它们大致跟着所在那一段的执行顺序走（可对照「查询执行顺序」那课）。

---

## 2. 相关子查询（Correlated：外行变，内查询跟着变）

普通子查询：里面那句通常只算一次。  
相关子查询：里面会用到**外面当前这一行**的字段，所以外面有多少行，里面就可能算多少次。

场景：全公司员工，想找 **工资 > 本部门平均营收** 的人。  
这时平均值不能全公司共用，必须按「当前员工所在部门」算：

```sql
SELECT *
FROM employees
WHERE salary > (
  SELECT AVG(revenue_generated)
  FROM employees AS dept_employees
  WHERE dept_employees.department = employees.department
);
```

注意 `dept_employees.department = employees.department`：  
里面用外面的 `employees.department`，一行换一个部门，平均值就换一次。

这类写法很强，但难读、有时也更慢，能改写成 `JOIN` + `GROUP BY` 时可以优先考虑改写。

---

## 3. 存在性判断：`IN` / `NOT IN`

以前 `IN` 后面是写死的列表，比如 `IN (1, 2, 3)`。  
现在列表可以来自子查询：

```sql
SELECT *
FROM mytable
WHERE column IN (
  SELECT another_column FROM another_table
);
```

- `IN`：当前值在子查询结果里 → 留下  
- `NOT IN`：不在里面 → 留下  

里面那句要选出「一列值/表达式」，外面才拿得去比。

---

## 新手怎么记

| 类型 | 一句话 |
|------|--------|
| 普通子查询 | 先算一个固定结果，外面拿来用 |
| 相关子查询 | 外面每一行，里面都要重新算一遍 |
| `IN` 子查询 | 判断「在不在另一张查询结果里」 |

必须用括号包住子查询；能起有意义的别名，读起来会轻松很多。
