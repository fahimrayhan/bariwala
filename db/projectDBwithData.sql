-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2022 at 09:02 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bariwala_mn`
--

-- --------------------------------------------------------

--
-- Table structure for table `apartments`
--

CREATE TABLE `apartments` (
  `apartment_id` int(11) AUTO_INCREMENT NOT NULL,
  `beds` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT 0,
  `description` text NOT NULL,
  `rent_per_month` decimal(8,2) NOT NULL,
  `type` varchar(30) NOT NULL,
  `title` varchar(50) NOT NULL,
  `baths` int(11) NOT NULL,
  `area` varchar(20) NOT NULL,
  `date` varchar(20) NOT NULL,
  `from_month` varchar(20) NOT NULL,
  `nth_floor` int(11) NOT NULL,
  `property_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `apartments`
--

INSERT INTO `apartments` (`apartment_id`, `beds`, `status`, `description`, `rent_per_month`, `type`, `title`, `baths`, `area`, `date`, `from_month`, `nth_floor`, `property_id`, `user_id`) VALUES
(4, 5, 0, 'adsf', '54.00', 'Micro Apartment', 'ABC PP', 5, '342', '3/26/2022', '2022-03-08', 2, 5, 0);

-- --------------------------------------------------------

--
-- Table structure for table `apartment_img`
--

CREATE TABLE `apartment_img` (
  `img_id` int(11) AUTO_INCREMENT NOT NULL,
  `apartment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `blog_id` int(11) AUTO_INCREMENT NOT NULL,
  `blog_title` varchar(50) NOT NULL,
  `blog_description` text NOT NULL,
  `date` varchar(20) NOT NULL,
  `blog_meta_info` text DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blog_img`
--

CREATE TABLE `blog_img` (
  `blog_id` int(11) NOT NULL,
  `img_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `buildings`
--

CREATE TABLE `buildings` (
  `property_id` int(11) AUTO_INCREMENT NOT NULL,
  `building_name` varchar(50) NOT NULL,
  `garage` tinyint(1) DEFAULT 0,
  `lift` tinyint(1) DEFAULT 0,
  `city_name` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL,
  `thana` varchar(30) NOT NULL,
  `total_floor` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buildings`
--

INSERT INTO `buildings` (`property_id`, `building_name`, `garage`, `lift`, `city_name`, `address`, `thana`, `total_floor`, `user_id`) VALUES
(4, 'ABC Villa', 1, 1, 'Dhaka', 'asdf', 'সদর থানা', 5, 0),
(5, 'BBC Villa', 1, 1, 'Chittagong', 'asdf', 'সদর থানা', 55, 0),
(6, 'Rayhan Villa', 0, 1, 'Dhaka', 'afasdf', 'DDD', 5, 0),
(7, 'Building 1', 1, 1, 'Gazipur', 'Khalil Market, Miabari Road, Gozariapara\nBhawal Mi', 'Joydebpur Police Station', 11, 0);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `img_id` int(11) AUTO_INCREMENT NOT NULL,
  `img_url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `content` text NOT NULL,
  `page_id` int(11) AUTO_INCREMENT NOT NULL,
  `page_title` varchar(100) NOT NULL,
  `meta_info` text DEFAULT NULL,
  `isPublished` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `page_img`
--

CREATE TABLE `page_img` (
  `page_id` int(11) NOT NULL,
  `img_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `payment_id` int(11) AUTO_INCREMENT NOT NULL,
  `amount` decimal(8,2) NOT NULL,
  `date` varchar(20) NOT NULL,
  `status` tinyint(1) DEFAULT 0,
  `transaction_id` int(11) NOT NULL,
  `paid_to` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `apartment_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `permissions_id` int(11) AUTO_INCREMENT NOT NULL,
  `permissions_type` varchar(30) NOT NULL,
  `scripts` varchar(256) DEFAULT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) AUTO_INCREMENT NOT NULL,
  `role_type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role_type`) VALUES
(1, 'admin'),
(2, 'owner'),
(4, 'subscriber'),
(3, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `full_name` varchar(80) NOT NULL,
  `user_id` int(11) AUTO_INCREMENT NOT NULL,
  `email` varchar(256) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `registration_date` varchar(20) NOT NULL,
  `is_authenticated` tinyint(1) DEFAULT 0,
  `password` text NOT NULL,
  `birth_date` varchar(20) NOT NULL,
  `parent_id` int(11) DEFAULT 0,
  `n_id` int(11) DEFAULT NULL,
  `occupation` varchar(30) DEFAULT NULL,
  `rent_status` varchar(30) DEFAULT NULL,
  `dues` decimal(8,2) DEFAULT NULL,
  `balance` decimal(8,2) DEFAULT NULL,
  `bank_acc` int(11) DEFAULT NULL,
  `tin_certificate` int(11) DEFAULT NULL,
  `user_name` varchar(50) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`full_name`, `user_id`, `email`, `phone_number`, `registration_date`, `is_authenticated`, `password`, `birth_date`, `parent_id`, `n_id`, `occupation`, `rent_status`, `dues`, `balance`, `bank_acc`, `tin_certificate`, `user_name`, `role_id`) VALUES
('Fahim Rayhan', 0, 'fahimrayhan786@gmail.com', '01686470241', '3/21/2022', 0, '$2b$11$L1KTYVF96I0OyRgiuI6Eg.Xg0KAwOFp7S4Gx8ZVaTXIX2EcgE8TrG', '2022-03-01', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'fahim-rayhan', 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apartments`
--
ALTER TABLE `apartments`
  ADD PRIMARY KEY (`apartment_id`),
  ADD KEY `property_id` (`property_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `apartment_img`
--
ALTER TABLE `apartment_img`
  ADD PRIMARY KEY (`img_id`,`apartment_id`),
  ADD KEY `apartment_id` (`apartment_id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`blog_id`),
  ADD UNIQUE KEY `blog_title` (`blog_title`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `blog_img`
--
ALTER TABLE `blog_img`
  ADD PRIMARY KEY (`blog_id`,`img_id`),
  ADD KEY `img_id` (`img_id`);

--
-- Indexes for table `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`property_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`img_id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`page_id`),
  ADD UNIQUE KEY `page_title` (`page_title`);

--
-- Indexes for table `page_img`
--
ALTER TABLE `page_img`
  ADD PRIMARY KEY (`page_id`,`img_id`),
  ADD KEY `img_id` (`img_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`payment_id`),
  ADD UNIQUE KEY `transaction_id` (`transaction_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `apartment_id` (`apartment_id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`permissions_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `role_type` (`role_type`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone_number` (`phone_number`),
  ADD UNIQUE KEY `user_name` (`user_name`),
  ADD UNIQUE KEY `n_id` (`n_id`),
  ADD UNIQUE KEY `bank_acc` (`bank_acc`),
  ADD UNIQUE KEY `tin_certificate` (`tin_certificate`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apartments`
--
ALTER TABLE `apartments`
  MODIFY `apartment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `buildings`
--
ALTER TABLE `buildings`
  MODIFY `property_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `img_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `page_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `payment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `permissions_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `apartments`
--
ALTER TABLE `apartments`
  ADD CONSTRAINT `apartments_ibfk_1` FOREIGN KEY (`property_id`) REFERENCES `buildings` (`property_id`),
  ADD CONSTRAINT `apartments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `apartment_img`
--
ALTER TABLE `apartment_img`
  ADD CONSTRAINT `apartment_img_ibfk_1` FOREIGN KEY (`img_id`) REFERENCES `images` (`img_id`),
  ADD CONSTRAINT `apartment_img_ibfk_2` FOREIGN KEY (`apartment_id`) REFERENCES `apartments` (`apartment_id`);

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `blog_img`
--
ALTER TABLE `blog_img`
  ADD CONSTRAINT `blog_img_ibfk_1` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`blog_id`),
  ADD CONSTRAINT `blog_img_ibfk_2` FOREIGN KEY (`img_id`) REFERENCES `images` (`img_id`);

--
-- Constraints for table `buildings`
--
ALTER TABLE `buildings`
  ADD CONSTRAINT `buildings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `page_img`
--
ALTER TABLE `page_img`
  ADD CONSTRAINT `page_img_ibfk_1` FOREIGN KEY (`page_id`) REFERENCES `pages` (`page_id`),
  ADD CONSTRAINT `page_img_ibfk_2` FOREIGN KEY (`img_id`) REFERENCES `images` (`img_id`);

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`apartment_id`) REFERENCES `apartments` (`apartment_id`);

--
-- Constraints for table `permissions`
--
ALTER TABLE `permissions`
  ADD CONSTRAINT `permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
