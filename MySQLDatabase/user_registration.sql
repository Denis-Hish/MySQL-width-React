-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 29 2024 г., 16:40
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `react_mysql`
--

-- --------------------------------------------------------

--
-- Структура таблицы `user_registration`
--

CREATE TABLE `user_registration` (
  `userid` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `phoneno` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `gender` varchar(100) NOT NULL,
  `countryid` int NOT NULL,
  `stateid` int NOT NULL,
  `address1` text NOT NULL,
  `address2` text NOT NULL,
  `accept` int NOT NULL,
  `status` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `user_registration`
--

INSERT INTO `user_registration` (`userid`, `name`, `username`, `email`, `password`, `phoneno`, `gender`, `countryid`, `stateid`, `address1`, `address2`, `accept`, `status`) VALUES
(1, 'Denis Nazarow', 'denus31', 'hish.denis@gmail.com', '123456789', 'undefined', 'Male', 175, 2868, 'Wojciecha Szczepaniaka 27/17', 'Wojciecha Szczepaniaka 27/17', 1, 1),
(2, 'Denis Nazarow', 'edrgsgrg', 'hish.denis@gmail.com', 'gsgegesg', 'undefined', 'Female', 168, 2748, 'Wojciecha Szczepaniaka 27/17', 'Wojciecha Szczepaniaka 27/17', 1, 1),
(3, 'Denis Nazarow', 'efsefef', 'hish.denis@gmail.com', 'sefefesf', 'undefined', 'Male', 159, 2640, 'Wojciecha Szczepaniaka 27/17', 'Wojciecha Szczepaniaka 27/17', 1, 1),
(4, 'Denis Nazarow', 'denus31', 'hish.denis@gmail.com', '123456', '576203610', 'Female', 173, 2839, 'Wojciecha Szczepaniaka 27/17', 'Wojciecha Szczepaniaka 27/17', 1, 1),
(5, 'Denis Nazarow', '54234534', 'hish.denis@gmail.com', '453453453', '576203610', 'Other', 166, 2725, 'Wojciecha Szczepaniaka 27/17', 'Wojciecha Szczepaniaka 27/17', 1, 1),
(6, 'Lika', 'lika123', 'lika@mail.pl', '123456', '658435464', 'Male', 228, 3772, 'Address1', 'Address2', 1, 1),
(7, 'Alex', 'al', 'al@mail.com', '658435464', '6546354684', 'Other', 1, 42, '584', 'kjhvbkjhvk', 1, 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `user_registration`
--
ALTER TABLE `user_registration`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `user_registration`
--
ALTER TABLE `user_registration`
  MODIFY `userid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
