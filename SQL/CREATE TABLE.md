1. 创建一个名为“新表”的表格，Database并包含以下列：
–Name描述数据库名称的字符串（文本）
–Version此数据库最新版本的数字（浮点数）
–Download_count此数据库的下载次数的整数计数

此表没有任何约束条件。

```sql
CREATE TABLE IF NOT EXISTS Database (
    name TEXT,
    version FLOAT,
    download_count INTEGER
);
```