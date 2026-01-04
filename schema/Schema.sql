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

CREATE TABLE userimage(
    imageid INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nameimage varchar(255) NOT NULL,
    pathimage varchar(255) NOT NULL,
    user_id int(6),
    -- FK 
    FOREIGN KEY (user_id) REFERENCES users(userid)
    -- เมื่อลบห้ามมีการทำอะไรกับตารางPK
    ON DELETE CASCADE,
    -- อัพเดทเมื่อ PK อัพเดทจะไม่มีอะไรเกิดกับตารางลูก
    ON UPDATE NO ACTION,
    CREATED_AT DATETIME DEFAULT CURRENT_TIMESTAMP,
    UPDATED_AT DATETIME,
    DELETED_AT DATETIME
)ENGINE=InnoDB;