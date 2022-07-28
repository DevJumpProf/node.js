CREATE DATABASE  IF NOT EXISTS `heroesdatabase` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `heroesdatabase`;
-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: heroesdatabase
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `heroes`
--

DROP TABLE IF EXISTS `heroes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `heroes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `profesion` varchar(45) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `resenia` varchar(150) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heroes`
--

LOCK TABLES `heroes` WRITE;
/*!40000 ALTER TABLE `heroes` DISABLE KEYS */;
INSERT INTO `heroes` VALUES (1,'Ada Lovelace','Matemática e Informática','Reino Unido','Augusta Ada King, Condesa de Lovelace (Londres, 10 de diciembre de 1815-íd., 27 de noviembre de 1852), registrada al nacer como Augusta Ada Byron y co',NULL,NULL),(2,'Charles Babbage','Matemático y Científico de la Computación','Reino Unido','Charles Babbage FRS (Teignmouth, Devonshire, Gran Bretaña, 26 de diciembre de 1791-Londres, 18 de octubre de 1871) fue un matemático y científico de l','2022-07-26','2022-07-26'),(3,'Margaret Hamilton','Ingeniera de Software','Estados Unidos','Margaret Hamilton (Paoli, Estados Unidos, 17 de agosto de 1963)) fue directora de ingeniería de software para el proyecto que escribió el código de la','2022-07-26','2022-07-26'),(4,'MODIFICADO','Científico de la Computación','Reino Unido','fue un cientifico','2022-07-26','2022-07-26'),(5,'Grace Hopper','Científica de la Computación y Militar','Estados Unidos','Grace Murray Hopper (Nueva York, 9 de diciembre de 1906 - Condado de Arlington, 1 de enero de 1992). La contralmirante Dra. Grace Murray Hopper fue pi','2022-07-26','2022-07-26'),(6,'Vinton (Vin) Cerf','Matemático y Científico de la Computación','Estados Unidos','Vinton Gray Cerf (New Haven, Connecticut, Estados Unidos, 23 de junio de 1943) es un científico de la computación estadounidense, considerado uno de l','2022-07-26','2022-07-26'),(7,'Joan Clarke','Criptoanalista y Numismática','Reino Unido','Joan Elisabeth Lowther Murray (Londres, 24 de junio de 1917 – Oxford, 4 de septiembre de 1996) fue una criptoanalista y numismática británica que trab','2022-07-26','2022-07-26'),(8,'Alan Turing','Matemático y Científico de la Computación','Reino Unido','Alan Mathison Turing (Paddington, Londres, 23 de junio de 1912-Wilmslow, Cheshire, 7 de junio de 1954), fue un matemático, lógico, científico de la co','2022-07-26','2022-07-26'),(10,' Ryan Dahl','Ingeniero de Software','Estados Unidos','Creador de NodeJS. Ryan asistió a un colegio comunitario en San Diego y luego se transfirió a UC San Diego, donde estudió matemáticas. Luego asistió a','2022-07-26','2022-07-26');
/*!40000 ALTER TABLE `heroes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-27 17:25:54
