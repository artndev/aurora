CREATE DATABASE aurora;
use aurora;

CREATE TABLE articles (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    updated TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO articles (title, contents) 
VALUES
("My First Article", "An article about..."),
("My Second Article", "An article about...");