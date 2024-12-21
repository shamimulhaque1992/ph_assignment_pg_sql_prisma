<!-- make the following text for readme file ready -->

1. What is PostgreSQL?
   PostgreSQL is an advanced open-source relational database management system (RDBMS) known for its robustness, scalability, and extensive features. It supports both SQL (relational) and JSON (non-relational) querying, making it highly versatile for a wide range of applications. PostgreSQL emphasizes standards compliance and extensibility, offering features like transactions, ACID compliance, indexing, and custom data types.

2. What is the purpose of a database schema in PostgreSQL?
   A schema in PostgreSQL is a namespace that organizes and manages database objects such as tables, views, functions, and indexes. Schemas allow multiple users or applications to use a single database without interference. By segregating objects into schemas, PostgreSQL supports modularity, security, and easy maintenance.

3. Explain the primary key and foreign key concepts in PostgreSQL.
   Primary Key: A primary key is a column or combination of columns that uniquely identifies a row in a table. It enforces data integrity by ensuring no duplicate or NULL values.
   Foreign Key: A foreign key is a column in one table that establishes a relationship with the primary key in another table. It enforces referential integrity by ensuring the referenced data exists in the related table.
4. What is the difference between the VARCHAR and CHAR data types?
   CHAR(n): A fixed-length data type. It always reserves n characters, padding with spaces if the input is shorter.
   VARCHAR(n): A variable-length data type. It allows storing strings up to n characters without padding, making it more storage-efficient.
5. Explain the purpose of the WHERE clause in a SELECT statement.
   The WHERE clause filters rows in a query based on specified conditions. It determines which records are retrieved, updated, or deleted, improving query precision. For example:

```bash
SELECT  FROM students WHERE age > 20;
```

6. What are the LIMIT and OFFSET clauses used for?
   LIMIT: Specifies the maximum number of rows to return in a query.
   OFFSET: Skips a specified number of rows before beginning to return results.
   They are commonly used for pagination:

```bash
   SELECT FROM students LIMIT 10 OFFSET 20;
```

7. How can you perform data modification using UPDATE statements?
   The UPDATE statement modifies existing rows in a table. The SET clause specifies new values, and the WHERE clause filters the rows to be updated:

```bash
UPDATE students
SET status = 'Awarded'
WHERE student_id = 1;
```

8. What is the significance of the JOIN operation, and how does it work in PostgreSQL?
   The JOIN operation combines rows from two or more tables based on a related column. It is crucial for querying data across multiple tables in a relational database.

INNER JOIN: Returns matching rows from both tables.
LEFT JOIN: Returns all rows from the left table and matching rows from the right.

```bash
SELECT students.student_name, courses.course_name
FROM students
INNER JOIN enrollment ON students.student_id = enrollment.student_id
INNER JOIN courses ON enrollment.course_id = courses.course_id;
```

9. Explain the GROUP BY clause and its role in aggregation operations.
   The GROUP BY clause groups rows with the same values in specified columns, allowing aggregate functions like COUNT, SUM, and AVG to be applied to each group. It is essential for summarizing data.

```bash
SELECT course_name, COUNT(\*) AS students_enrolled
FROM courses
JOIN enrollment ON courses.course_id = enrollment.course_id
GROUP BY course_name;
```

10. How can you calculate aggregate functions like COUNT, SUM, and AVG in PostgreSQL?
    Aggregate functions perform calculations on a set of rows and return a single value:

COUNT: Counts rows.
SUM: Adds values.
AVG: Computes the average.

```bash
SELECT
COUNT(\*) AS total_students,
SUM(frontend_mark + backend_mark) AS total_marks,
AVG(age::INTEGER) AS average_age
FROM students;

```
