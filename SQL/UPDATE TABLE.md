movies
id	title	director	year	length_minutes

1. 添加一个名为Aspect_ratio 的 列，数据类型为FLOAT，用于存储每部电影上映时的宽高比。
```sql
ALTER TABLE movies
ADD aspect_ratio FLOAT;
```
2. 添加一个名为“Language”（语言）的列，数据类型为文本，用于存储电影的发行语言。确保该语言的默认值为英语。
```sql
ALTER TABLE movies
ADD language TEXT DEFAULT "English";
```