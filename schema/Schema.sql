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
CREATE TABLE category(
    category_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nameofcategory varchar(1000) NOT NULL,
    description varchar(10000) NOT NULL,
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
    status enum('public','draft','private','delete') NOT NULL,
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
CREATE TABLE blogofpost (
    blogofpost_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    image_id INT NOT NULL,
    category_id INT NOT NULL,
    tag_id INT,
    summary VARCHAR(1000) NOT NULL,
    description VARCHAR(15000) NOT NULL,
    statusofblog ENUM('draft','public','private','deleted') NOT NULL DEFAULT 'draft',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    CONSTRAINT fk_blog_user
        FOREIGN KEY (user_id)
        REFERENCES users(userid)
        ON DELETE CASCADE,
    CONSTRAINT fk_blog_image
        FOREIGN KEY (image_id)
        REFERENCES imageofblog(image_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_blog_category
        FOREIGN KEY (category_id)
        REFERENCES category(category_id)
        ON DELETE CASCADE
) ENGINE=InnoDB;


blog_tag (
   blog_id,
   tag_id
)


