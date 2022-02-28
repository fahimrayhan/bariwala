CREATE TABLE roles
(
  role_id INT AUTO_INCREMENT NOT NULL,
  role_type VARCHAR(20) NOT NULL,
  PRIMARY KEY (role_id),
  UNIQUE (role_type)
);

CREATE TABLE permissions
(
  permission_id INT AUTO_INCREMENT NOT NULL,
  permission_type VARCHAR(20) NOT NULL,
  permission_values VARCHAR(256) NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY (permission_id),
  FOREIGN KEY (role_id) REFERENCES roles(role_id),
  UNIQUE (permission_type)
);

CREATE TABLE contacts
(
  c_id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(256) NOT NULL,
  body TEXT NOT NULL,
  sender_email VARCHAR(80) NOT NULL,
  date DATE NOT NULL,
  PRIMARY KEY (c_id)
);

CREATE TABLE users
(
  u_name VARCHAR(30) NOT NULL,
  u_mail VARCHAR(60) NOT NULL,
  u_address VARCHAR(256) NULL DEFAULT NULL,
  u_phone INT NOT NULL,
  u_pass TEXT(500) NOT NULL,
  u_tin INT NULL DEFAULT NULL,
  u_bank_acc INT NULL DEFAULT NULL,
  u_reg_date DATE NOT NULL,
  u_birthdate DATE NOT NULL,
  u_nid INT NULL DEFAULT NULL,
  u_id INT AUTO_INCREMENT NOT NULL,
  dues NUMERIC(8,2) NULL DEFAULT 0,
  balance NUMERIC(8,2) NULL DEFAULT 0,
  isAuth BOOLEAN NULL DEFAULT 0,
  parent_id INT NULL DEFAULT 0,
  role_id INT NOT NULL,
  PRIMARY KEY (u_id),
  FOREIGN KEY (role_id) REFERENCES roles(role_id),
  UNIQUE (u_mail),
  UNIQUE (u_phone),
  UNIQUE (u_tin),
  UNIQUE (u_bank_acc)
);