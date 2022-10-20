DROP DATABASE BOT;-- 

CREATE DATABASE BOT;

USE BOT;

CREATE TABLE tutor (
	tutor_id varchar(64) NOT NULL PRIMARY KEY
) ENGINE=INNODB;

CREATE TABLE `volunteer_session` (
	transaction_id VARCHAR(64) NOT NULL,
    tutor_id VARCHAR(64) NOT NULL,
    `timestamp` DATETIME NOT NULL DEFAULT NOW(),
    duration INT NOT NULL,
    description VARCHAR(1024) NOT NULL,
    FOREIGN KEY (tutor_id) REFERENCES tutor(tutor_id),
    PRIMARY KEY(transaction_id)
) ENGINE=INNODB;

CREATE TABLE volunteer_type (
	volunteer_type_id VARCHAR(16) NOT NULL,
    description VARCHAR(64),
    PRIMARY KEY(volunteer_type_id)
) ENGINE=INNODB;

CREATE TABLE volunteer_session_volunteer_type (
	tutor_id VARCHAR(64) NOT NULL,
    volunteer_type_id VARCHAR(16) NOT NULL,
    PRIMARY KEY(`tutor_id`, `volunteer_type_id`)
) ENGINE=INNODB;


/* LOAD STATIC DATA */

INSERT INTO volunteer_type
	(volunteer_type_id, description)
VALUES
	("text", "text"),
    ("voice", "voice"),
    ("in-person", "in-person")