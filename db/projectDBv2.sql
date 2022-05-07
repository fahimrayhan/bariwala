CREATE TABLE roles
(
  role_id INT AUTO_INCREMENT NOT NULL,
  role_type VARCHAR(30) NOT NULL,
  PRIMARY KEY (role_id),
  UNIQUE (role_type)
);

CREATE TABLE pages
(
  content TEXT NOT NULL,
  page_id INT AUTO_INCREMENT NOT NULL,
  page_title VARCHAR(100) NOT NULL,
  meta_info TEXT NULL DEFAULT NULL,
 isPublished BOOLEAN NULL DEFAULT '0',
  PRIMARY KEY (page_id),
  UNIQUE (page_title)
);

CREATE TABLE images
(
  img_id INT AUTO_INCREMENT NOT NULL,
  img_url VARCHAR(100) NOT NULL,
  PRIMARY KEY (img_id)
);

CREATE TABLE permissions
(
  permissions_id INT AUTO_INCREMENT NOT NULL,
  permissions_type VARCHAR(30) NOT NULL,
  scripts VARCHAR(256) NULL DEFAULT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY (permissions_id),
  FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

CREATE TABLE page_img
(
  page_id INT NOT NULL,
  img_id INT NOT NULL,
  PRIMARY KEY (page_id, img_id),
  FOREIGN KEY (page_id) REFERENCES pages(page_id),
  FOREIGN KEY (img_id) REFERENCES images(img_id)
);

CREATE TABLE contacts
(
  contact_id INT AUTO_INCREMENT NOT NULL,
  sender_name VARCHAR(80) NOT NULL,
  sender_email VARCHAR(256) NOT NULL,
  msg TEXT NOT NULL,
  msg_date VARCHAR(20) NOT NULL,
  receiver_email VARCHAR(80) NOT NULL,
  PRIMARY KEY (contact_id)
);

CREATE TABLE users
(
  full_name VARCHAR(80) NOT NULL,
  user_id INT AUTO_INCREMENT NOT NULL,
  email VARCHAR(256) NOT NULL,
  user_desc VARCHAR(256) NULL DEFAULT NULL,
  phone_number VARCHAR(20) NOT NULL,
  registration_date DATE NOT NULL,
  is_authenticated BOOLEAN NULL DEFAULT '0',
  password TEXT NOT NULL,
  birth_date VARCHAR(20) NOT NULL,
  parent_id INT NULL DEFAULT '0',
  n_id INT NULL DEFAULT NULL,
  occupation VARCHAR(30) NULL DEFAULT NULL,
  rent_status VARCHAR(30) NULL DEFAULT NULL,
  dues NUMERIC(8,2) NULL DEFAULT NULL,
  balance NUMERIC(8,2) NULL DEFAULT NULL,
  bank_acc INT NULL DEFAULT NULL,
  tin_certificate INT NULL DEFAULT NULL,
  user_name VARCHAR(50) NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (role_id) REFERENCES roles(role_id),
  UNIQUE (email),
  UNIQUE (phone_number),
  UNIQUE (n_id),
  UNIQUE (bank_acc),
  UNIQUE (tin_certificate),
  UNIQUE (user_name)
);

CREATE TABLE buildings
(
  property_id INT AUTO_INCREMENT NOT NULL,
  garage BOOLEAN NULL DEFAULT '0',
  lift BOOLEAN NULL DEFAULT '0',
  city_name VARCHAR(30) NOT NULL,
  address VARCHAR(50) NOT NULL,
  thana VARCHAR(30) NOT NULL,
  total_floor INT NOT NULL,
  building_name VARCHAR(50) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (property_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE blogs
(
  blog_id INT AUTO_INCREMENT NOT NULL,
  blog_title VARCHAR(50) NOT NULL,
  blog_description TEXT NOT NULL,
  date VARCHAR(20) NOT NULL,
  blog_meta_info TEXT,
  user_id INT NOT NULL,
  PRIMARY KEY (blog_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  UNIQUE (blog_title),
  UNIQUE (user_id)
);

CREATE TABLE blog_img
(
  blog_id INT NOT NULL,
  img_id INT NOT NULL,
  PRIMARY KEY (blog_id, img_id),
  FOREIGN KEY (blog_id) REFERENCES blogs(blog_id),
  FOREIGN KEY (img_id) REFERENCES images(img_id)
);

CREATE TABLE apartments
(
  apartment_id INT AUTO_INCREMENT NOT NULL,
  beds INT NOT NULL,
  status BOOLEAN NULL DEFAULT '0',
  description TEXT NOT NULL,
  rent_per_month NUMERIC(8,2) NOT NULL,
  type VARCHAR(30) NOT NULL,
  title VARCHAR(50) NOT NULL,
  baths INT NOT NULL,
  area VARCHAR(20) NOT NULL,
  date VARCHAR(20) NOT NULL,
  from_month VARCHAR(20) NOT NULL,
  nth_floor INT NOT NULL,
  property_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (apartment_id),
  FOREIGN KEY (property_id) REFERENCES buildings(property_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE apartment_img
(
  img_id INT NOT NULL,
  apartment_id INT NOT NULL,
  PRIMARY KEY (img_id, apartment_id),
  FOREIGN KEY (img_id) REFERENCES images(img_id),
  FOREIGN KEY (apartment_id) REFERENCES apartments(apartment_id)
);

CREATE TABLE lease
(
  lease_id INT AUTO_INCREMENT NOT NULL,
  tenure_from VARCHAR(20) NOT NULL,
  tenure_to VARCHAR(20) NOT NULL,
  description VARCHAR(80) NOT NULL,
  owner_id INT NOT NULL,
  user_id INT NOT NULL,
  apartment_id INT NOT NULL,
  PRIMARY KEY (lease_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (apartment_id) REFERENCES apartments(apartment_id)
);

CREATE TABLE payments
(
  payment_id INT AUTO_INCREMENT NOT NULL,
  amount NUMERIC(8,2) NOT NULL,
  date VARCHAR(20) NOT NULL,
  status BOOLEAN NULL DEFAULT '0',
  transaction_id INT NOT NULL,
  paid_by INT NOT NULL,
  paid_to INT NOT NULL,
  lease_id INT NOT NULL,
  PRIMARY KEY (payment_id),
  FOREIGN KEY (lease_id) REFERENCES lease(lease_id),
  UNIQUE (transaction_id)
);