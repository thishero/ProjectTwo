DROP DATABASE IF EXISTS capitals_db;
CREATE DATABASE capitals_db;
USE capitals_db;


CREATE TABLE questions(
  id INT NOT NULL AUTO_INCREMENT,
  question VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE answers(
  id INT NOT NULL AUTO_INCREMENT,
  answer VARCHAR(100),
  question_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);