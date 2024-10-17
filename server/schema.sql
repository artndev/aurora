CREATE DATABASE aurora;
use aurora;

CREATE TABLE enlang (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    updated TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE it (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    updated TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE maths (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    updated TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE rulang (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    updated TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO enlang (title, contents) 
VALUES
("My First Article", "{\"My Second SubArticle\": \"Some Text\",\"My Third SubArticle\": \"Some Text\"}"),
("My Second Article", "{\"My Second SubArticle\": \"Some Text\",\"My Third SubArticle\": \"Some Text\"}");