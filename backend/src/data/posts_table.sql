+-------------+---------------+------+-----+---------+----------------+
| Field       | Type          | Null | Key | Default | Extra          |
+-------------+---------------+------+-----+---------+----------------+
| post_id     | int           | NO   | PRI | NULL    | auto_increment |
| title       | varchar(255)  | YES  |     | NULL    |                |
| data        | varchar(5000) | YES  |     | NULL    |                |
| description | varchar(255)  | YES  |     | NULL    |                |
| type        | varchar(255)  | NO   |     | NULL    |                |
| long_data   | text          | YES  |     | NULL    |                |
+-------------+---------------+------+-----+---------+----------------+

CREATE TABLE posts_table (
    post_id int NOT NULL AUTO_INCREMENT,
    type varchar(255) NOT NULL, 
    title varchar(255), 
    data varchar(5000), 
    description varchar(255), 
    long_data text,
    PRIMARY KEY (post_id)
);