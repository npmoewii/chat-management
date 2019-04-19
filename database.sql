SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- DROP DATABASE IF EXISTS `chat_management`;
CREATE DATABASE IF NOT EXISTS `chat_management` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `chat_management`;

CREATE TABLE `room` (
  `roomId` varchar(20) COLLATE utf8mb4_unicode_ci PRIMARY KEY
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user` (
  `username` varchar(20) COLLATE utf8mb4_unicode_ci PRIMARY KEY
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `room_member` (
  `roomId` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  CONSTRAINT `pk_room_member` PRIMARY KEY (`roomId`, `username`),
  CONSTRAINT `fk_room_member_roomId` FOREIGN KEY (`roomId`) REFERENCES `room`(`roomId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_room_member_username` FOREIGN KEY (`username`) REFERENCES `user`(`username`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

COMMIT;
