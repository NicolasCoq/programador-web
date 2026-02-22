-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: programador
-- ------------------------------------------------------
-- Server version	8.4.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dato1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dato2` text COLLATE utf8mb4_unicode_ci,
  `dato3` text COLLATE utf8mb4_unicode_ci,
  `dato4` text COLLATE utf8mb4_unicode_ci,
  `precio` float NOT NULL,
  `img_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novedades`
--

LOCK TABLES `novedades` WRITE;
/*!40000 ALTER TABLE `novedades` DISABLE KEYS */;
INSERT INTO `novedades` VALUES (1,'Teclado Ajazz ak820pro','Conectividad con múltiples dispositivos.','Resiste a salpicaduras.','Pantalla integrada.','Tipo de teclado: mecánico.',68.99,'oyq9uv1zt8unfo1lhj12'),(3,'Mouse Ajazz aj159pro','Es inalámbrico.','Orientación de la mano: ambidiestra.','Cuenta con un sensor óptico.','',45.99,'snn64hafpbckgtp7zviy'),(4,'Micrófono Fifine AM8','Formato: omnidireccional.','Dispositivos compatibles: ordenador.','Conector de salida: USB.','Cable de 2m.',54.99,'micro1_cg2z7a'),(5,'Auriculares VXE Siren V1','Ultraligero: 200g.','Conectividad tri-modo.','Latencia de 15ms en 2.4G.','Autonomia de bateria: hasta 98hs.',39.99,'auriculares1_ihhgmq'),(6,'Mando GameSir NovaLite','Control Inalámbrico.','Diseño ergonómico.','Compatible con Android.','Sist. de vibración incorporado.',24.99,'joystick1_wproil'),(7,'Monitor Asrock Challenger','Tamaño de pantalla: 27\".','Panel IPS.','Resolución máxima: 1920x1080p.','Conexión HDMI v1.4 y VGA.',109.99,'monitor1_khduoh'),(10,'Webcam Logitech C920x','Resolución máxima de video: 1920px x 1080px.','Compatible con Skype, Facebook, Twitter, YouTube.','Incluye luz led.','Imagen con resolución de 3Mpx.',69.99,'zb7dti1n1lv3t3ur1lew');
/*!40000 ALTER TABLE `novedades` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-22 19:21:17
