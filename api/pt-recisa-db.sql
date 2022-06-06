-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 06, 2022 at 02:01 PM
-- Server version: 10.7.3-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pt-recisa-db`
--
CREATE DATABASE IF NOT EXISTS `pt-recisa-db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `pt-recisa-db`;

-- --------------------------------------------------------

--
-- Table structure for table `asesor`
--

CREATE TABLE `asesor` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `asesor`
--

INSERT INTO `asesor` (`id`, `nombre`, `apellido`) VALUES
(1, 'Asesor1', 'asesor1'),
(2, 'asesor2', 'Asesor2'),
(3, 'test1', 'Test1'),
(4, 'test3', 'test3'),
(5, 'test4', 'test4'),
(6, 'test5', 'test5'),
(7, 'test6', 'test6'),
(8, 'test7', 'test7'),
(16, 'test8', 'test8');

-- --------------------------------------------------------

--
-- Table structure for table `estacion`
--

CREATE TABLE `estacion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock_tarjeta` int(11) NOT NULL,
  `saldo_caja` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `estacion`
--

INSERT INTO `estacion` (`id`, `nombre`, `stock_tarjeta`, `saldo_caja`) VALUES
(1, 'el lago', 4, 25000),
(3, 'test2', 4, 5000),
(6, 'test3', 3, 3),
(8, 'test4', 0, 4),
(17, 'test6', 6, 6);

-- --------------------------------------------------------

--
-- Table structure for table `venta`
--

CREATE TABLE `venta` (
  `id` int(11) NOT NULL,
  `id_asesor` int(11) NOT NULL,
  `id_estacion` int(11) NOT NULL,
  `cantidad_venta` int(11) NOT NULL,
  `total_venta` int(11) NOT NULL,
  `fecha_venta` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `venta`
--

INSERT INTO `venta` (`id`, `id_asesor`, `id_estacion`, `cantidad_venta`, `total_venta`, `fecha_venta`) VALUES
(1, 2, 3, 1, 5000, '2022-06-06 05:11:08'),
(9, 1, 1, 1, 5000, '2022-06-06 08:15:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asesor`
--
ALTER TABLE `asesor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `estacion`
--
ALTER TABLE `estacion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_estacion` (`id_estacion`),
  ADD KEY `id_asesor` (`id_asesor`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `asesor`
--
ALTER TABLE `asesor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `estacion`
--
ALTER TABLE `estacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `venta`
--
ALTER TABLE `venta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`id_estacion`) REFERENCES `estacion` (`id`),
  ADD CONSTRAINT `venta_ibfk_2` FOREIGN KEY (`id_asesor`) REFERENCES `asesor` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
