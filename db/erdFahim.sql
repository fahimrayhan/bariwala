-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2022 at 10:25 AM
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
-- Database: `bariwala`
--

-- --------------------------------------------------------

--
-- Table structure for table `apartments`
--

CREATE TABLE `apartments` (
  `ap_id` int(11) NOT NULL,
  `ap_name` varchar(50) NOT NULL,
  `beds` int(11) NOT NULL DEFAULT 0,
  `rent_per_month` float NOT NULL DEFAULT 0,
  `type` varchar(50) DEFAULT NULL,
  `baths` int(11) NOT NULL DEFAULT 0,
  `date` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `from_month` varchar(50) NOT NULL DEFAULT current_timestamp(),
  `nth_floor` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `apartments`
--

INSERT INTO `apartments` (`ap_id`, `ap_name`, `beds`, `rent_per_month`, `type`, `baths`, `date`, `description`, `from_month`, `nth_floor`) VALUES
(1, 'Test Apartment', 1, 1, 'Duplex', 1, '2/28/2022', 'lorem ipsum', '2022-02-25', 1);

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `permission_id` int(11) NOT NULL,
  `permission_type` varchar(256) NOT NULL,
  `scripts_values` varchar(256) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL,
  `role_type` varchar(20) NOT NULL
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
  `u_name` varchar(30) NOT NULL,
  `u_mail` varchar(80) NOT NULL,
  `u_address` varchar(256) DEFAULT NULL,
  `u_phone` int(11) NOT NULL,
  `u_pass` text NOT NULL,
  `u_tin` int(11) DEFAULT NULL,
  `u_bank_acc` int(11) DEFAULT NULL,
  `u_reg_date` varchar(20) NOT NULL,
  `u_birth_date` date NOT NULL,
  `u_nid` int(11) DEFAULT NULL,
  `u_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `is_auth` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_name`, `u_mail`, `u_address`, `u_phone`, `u_pass`, `u_tin`, `u_bank_acc`, `u_reg_date`, `u_birth_date`, `u_nid`, `u_id`, `role_id`, `is_auth`) VALUES
('Fahim Rayhan', 'fahimrayhan786@gmail.com', NULL, 1686470241, '$2b$11$TsqTSQONet8YlZq9RJAt8OPeEgfjxJj5LwdvvrdT/68YDYP5rhRva', NULL, NULL, '2/23/2022', '2022-02-19', NULL, 2, 4, 0),
('Firuz', 'firuz@gmail.com', NULL, 2147483647, '$2b$11$bjlaIyyQ2g4EocYx4HYi3eXgmD5s/BdrreHO4DKb6eMo3M1n40dPS', NULL, NULL, '2/24/2022', '2022-02-03', NULL, 5, 4, 0),
('Munem', 'munem@gmail.com', NULL, 234213, '$2b$11$Ur2KxvzsUDmi0LxfyCNZfuxKl2xnRN/phyHRfZhIYPrjK6tXiIvpO', NULL, NULL, '2/24/2022', '2022-02-02', NULL, 6, 4, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apartments`
--
ALTER TABLE `apartments`
  ADD PRIMARY KEY (`ap_id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`permission_id`),
  ADD UNIQUE KEY `permission_type` (`permission_type`),
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
  ADD PRIMARY KEY (`u_id`),
  ADD UNIQUE KEY `u_mail` (`u_mail`),
  ADD UNIQUE KEY `u_tin` (`u_tin`),
  ADD UNIQUE KEY `u_bank_acc` (`u_bank_acc`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apartments`
--
ALTER TABLE `apartments`
  MODIFY `ap_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `permission_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

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
