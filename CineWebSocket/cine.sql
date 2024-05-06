-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: cine
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asiento`
--

DROP TABLE IF EXISTS `asiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asiento` (
  `ID_ASIENTO` int(11) NOT NULL AUTO_INCREMENT,
  `NUMERO_ASIENTO` int(11) DEFAULT NULL,
  `ID_PELICULA` int(11) NOT NULL,
  `ASIENTO_RESERVADO` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ID_ASIENTO`),
  KEY `ID_PELICULA` (`ID_PELICULA`),
  CONSTRAINT `asiento_ibfk_1` FOREIGN KEY (`ID_PELICULA`) REFERENCES `pelicula` (`ID_PELICULA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asiento`
--

LOCK TABLES `asiento` WRITE;
/*!40000 ALTER TABLE `asiento` DISABLE KEYS */;
INSERT INTO `asiento` VALUES (1,1,1,0),(2,2,1,0),(3,3,1,1),(4,4,1,1),(5,5,1,1),(6,1,2,0),(7,2,2,0),(8,3,2,0),(9,4,2,1),(10,5,2,0),(11,6,2,0),(12,1,3,0),(13,2,3,0),(14,3,3,0),(15,4,3,1);
/*!40000 ALTER TABLE `asiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensaje`
--

DROP TABLE IF EXISTS `mensaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mensaje` (
  `ID_MENSAJE` int(11) NOT NULL AUTO_INCREMENT,
  `DESCRIPCION` varchar(300) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`ID_MENSAJE`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensaje`
--

LOCK TABLES `mensaje` WRITE;
/*!40000 ALTER TABLE `mensaje` DISABLE KEYS */;
INSERT INTO `mensaje` VALUES (85,'El usuario Jhon ha reservado un asiento para la película Spiderman No Way home'),(86,'El usuario Jhon ha reservado un asiento para la película Spiderman No Way home'),(87,'El usuario Carlos ha reservado un asiento para la película Avengers End Game'),(88,'El usuario Carlos ha reservado un asiento para la película Interestellar'),(89,'El usuario Jhon ha reservado un asiento para la película Spiderman No Way home');
/*!40000 ALTER TABLE `mensaje` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pelicula`
--

DROP TABLE IF EXISTS `pelicula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pelicula` (
  `ID_PELICULA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE_PELICULA` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
  `ASSET_PELICULA` varchar(200) COLLATE utf8mb4_bin DEFAULT NULL,
  `RESERVADA` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ID_PELICULA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pelicula`
--

LOCK TABLES `pelicula` WRITE;
/*!40000 ALTER TABLE `pelicula` DISABLE KEYS */;
INSERT INTO `pelicula` VALUES (1,'Spiderman No Way home','assets/images/spidermannowayhome.jpg',0),(2,'Avengers End Game','assets/images/endgame.jpg',0),(3,'Interestellar','assets/images/interesterllar.jpg',0);
/*!40000 ALTER TABLE `pelicula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reserva_pelicula`
--

DROP TABLE IF EXISTS `reserva_pelicula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reserva_pelicula` (
  `ID_RESERVA` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE_USUARIO` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
  `ID_PELICULA` int(11) NOT NULL,
  `ID_ASIENTO` int(11) NOT NULL,
  `id` bigint(20) NOT NULL,
  PRIMARY KEY (`ID_RESERVA`),
  KEY `ID_PELICULA` (`ID_PELICULA`),
  KEY `ID_ASIENTO` (`ID_ASIENTO`),
  CONSTRAINT `reserva_pelicula_ibfk_1` FOREIGN KEY (`ID_PELICULA`) REFERENCES `pelicula` (`ID_PELICULA`),
  CONSTRAINT `reserva_pelicula_ibfk_2` FOREIGN KEY (`ID_ASIENTO`) REFERENCES `asiento` (`ID_ASIENTO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserva_pelicula`
--

LOCK TABLES `reserva_pelicula` WRITE;
/*!40000 ALTER TABLE `reserva_pelicula` DISABLE KEYS */;
/*!40000 ALTER TABLE `reserva_pelicula` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-06  9:27:30
