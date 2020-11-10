-- Load schema in mysql from root directory: mysql -u root -p < schema.sql
DROP DATABASE IF EXISTS budget_tracker;

CREATE DATABASE budget_tracker;
USE budget_tracker;

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR (50),
    budget SMALLINT NOT NULL
);

CREATE TABLE transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    amount DECIMAL (10, 2) NOT NULL,
    category_id INT,
    current DECIMAL (10, 2),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (category, budget) VALUES ('Groceries', 350);
INSERT INTO categories (category, budget) VALUES ('Physical Health', 350);
INSERT INTO categories (category, budget) VALUES ('Dining Out', 350);
INSERT INTO transactions (name, amount) VALUES ('Trader Joes', 25.65);
INSERT INTO transactions (name, amount) VALUES ('Karma Yoga', 75);
INSERT INTO transactions (name, amount) VALUES ('In-N-Out', 18.50);
