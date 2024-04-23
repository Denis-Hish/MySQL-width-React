-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 12, 2022 at 12:27 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactgraph_tutorial`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_medals`
--

CREATE TABLE `tbl_medals` (
  `id` int(11) NOT NULL,
  `country` varchar(100) NOT NULL,
  `medals` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_medals`
--

INSERT INTO `tbl_medals` (`id`, `country`, `medals`, `status`) VALUES
(1, 'USA', 110, 1),
(2, 'China', 100, 1),
(3, 'Russia', 72, 1),
(4, 'Britain', 47, 1),
(5, 'Australia', 46, 1),
(6, 'Germany', 41, 1),
(7, 'France', 40, 1),
(8, 'South Korea', 31, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_medals`
--
ALTER TABLE `tbl_medals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_medals`
--
ALTER TABLE `tbl_medals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
