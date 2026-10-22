# 集合运算：UNION / INTERSECT / EXCEPT

参考：[SQLBolt - Unions, Intersections & Exceptions](https://sqlbolt.com/topic/set_operations)

多张表有时不好 `JOIN`，但想把「几段查询的结果」拼在一起、取交集或差集，就用集合运算。

要求：两边查出的**列数相同、顺序对应、类型兼容**。

---

## 1. `UNION` / `UNION ALL`：上下拼接

```sql
SELECT column, another_column
FROM mytable
UNION          -- 或 UNION ALL / INTERSECT / EXCEPT
SELECT other_column, yet_another_column
FROM another_table
ORDER BY column DESC
LIMIT 10;
```

| 写法 | 意思 |
|------|------|
| `UNION` | 拼起来，并**去掉重复行** |
| `UNION ALL` | 拼起来，**保留重复行**（通常更快） |

执行顺序里，`UNION` 这类集合运算在 `ORDER BY`、`LIMIT` 之前（见 Lesson 12）。  
所以最后的排序、限制条数，是对「拼完之后的整份结果」做的。

什么时候用：数据散在不同表，不好直接 `JOIN`，又想一次查出合并结果。日常不如 `JOIN` 常见，但是好用的备选。

---

## 2. `INTERSECT`：两边都有的行

只保留**两个结果里都出现过的相同行**（像集合交集）。

```sql
SELECT name FROM table_a
INTERSECT
SELECT name FROM table_b;
```

默认也会去重；有的数据库支持 `INTERSECT ALL` 保留重复。

---

## 3. `EXCEPT`：左边有、右边没有

只保留**第一个查询有、第二个没有**的行（像差集）。  
**顺序很重要**，类似 `LEFT JOIN` / `RIGHT JOIN` 有方向。

```sql
-- A 有、B 没有
SELECT name FROM table_a
EXCEPT
SELECT name FROM table_b;
```

默认去重；有的库支持 `EXCEPT ALL`。

> 注意：MySQL 老版本可能没有 `INTERSECT` / `EXCEPT`，要用别的写法模拟；PostgreSQL、SQL Server、SQLite 等更常见。

---

## 新手对比

| 关键字 | 像什么 | 直觉 |
|--------|--------|------|
| `UNION` | 两堆纸摞一起再去重 | 合并 |
| `UNION ALL` | 两堆纸直接摞一起 | 合并且留重复 |
| `INTERSECT` | 两堆里都有的 | 交集 |
| `EXCEPT` | 第一堆有、第二堆没有 | 差集（有方向） |

记一句：`JOIN` 是按键把行**左右拼宽**；`UNION` 是把结果**上下拼长**。
