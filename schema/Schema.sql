-- user table
CREATE TABLE users(
    userid INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    usertype int(6) DEFAULT(0),
    email varchar(255) NOT NULL UNIQUE,
    password varchar(255) NOT NULL,
    CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP,
    UPDATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    DELETED_AT DATETIME 
)ENGINE=InnoDB;
-- user images table
CREATE TABLE userimage(
    imageid INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nameimage varchar(255) NOT NULL,
    pathimage varchar(255) NOT NULL,
    user_id int(6),
    FOREIGN KEY (user_id) 
    REFERENCES users(userid)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
    CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP,
    UPDATED_AT DATETIME,
    DELETED_AT DATETIME
)ENGINE=InnoDB;


-- 29ลงไปยังไม่ได้สร้างตารางรอ FK Case , Restric, NO ACTION
-- catagory content table
CREATE TABLE catagory(
    catagory_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nameofcatagory varchar(1000) NOT NULL,
    description varchar(20000) NOT NULL,
    status enum('public','drap','private','delete') NOT NULL,
    CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP,
    UPDATED_AT DATETIME,
    DELETED_AT DATETIME
)ENGINE=InnoDB;
--tag content blog table
CREATE TABLE tag(
    tag_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nameoftag varchar(1000) NOT NULL,
    description varchar(1000) NOT NULL,
    status enum('public','drap','private','delete') NOT NULL,
    CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP,
    UPDATED_AT DATETIME,
    DELETED_AT DATETIME
)ENGINE=InnoDB;
--tag content blog table
CREATE TABLE imageofblog(
    image_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nameofimageblog varchar(1000) NOT NULL,
    pathofimage varchar(1000) NOT NULL,
    CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP,
    UPDATED_AT DATETIME,
    DELETED_AT DATETIME
)ENGINE=InnoDB;
-- table blogofpost
CREATE TABLE blogofpost(
    user_id INT(6),
    image_id INT(6),
    catagory_id INT(6),
    tag_id INT(6),
    blogofpost_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    summary varchar(1000) NOT NULL,
    description varchar(20000) NOT NULL,
    statusofblog enum('drap','public','private','deleted') NOT NULL,
    CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP,
    UPDATED_AT DATETIME,
    DELETED_AT DATETIME
)ENGINE=InnoDB;

blog_tag (
   blog_id,
   tag_id
)


