-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.7.27-log - MySQL Community Server (GPL)
-- Операционная система:         Win64
-- HeidiSQL Версия:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных server
DROP DATABASE IF EXISTS `server`;
CREATE DATABASE IF NOT EXISTS `server` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `server`;

-- Дамп структуры для таблица server.chats
DROP TABLE IF EXISTS `chats`;
CREATE TABLE IF NOT EXISTS `chats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL COMMENT '1 - обычный чат; 2 - груповой чат',
  `name` varchar(50) CHARACTER SET latin1 DEFAULT NULL COMMENT 'название чата ( только для групового )',
  `description` varchar(50) CHARACTER SET latin1 DEFAULT NULL COMMENT 'описание чата ( только для групового )',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='таблица чатов пользователей';

-- Дамп данных таблицы server.chats: ~2 rows (приблизительно)
DELETE FROM `chats`;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
INSERT INTO `chats` (`id`, `type`, `name`, `description`) VALUES
	(1, 1, NULL, NULL),
	(2, 2, 'Test', 'Test desc');
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;

-- Дамп структуры для таблица server.groups
DROP TABLE IF EXISTS `groups`;
CREATE TABLE IF NOT EXISTS `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Ключ группы',
  `name` varchar(50) NOT NULL COMMENT 'Название для вывода на сайте',
  `description` varchar(100) DEFAULT NULL COMMENT 'Описание',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы server.groups: ~3 rows (приблизительно)
DELETE FROM `groups`;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` (`id`, `name`, `description`) VALUES
	(1, 'Администратор', 'Максимальные права'),
	(2, 'Модератор', 'Права администрирования системой'),
	(3, 'Пользователи', 'Обычные права');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;

-- Дамп структуры для представление server.list_chats
DROP VIEW IF EXISTS `list_chats`;
-- Создание временной таблицы для обработки ошибок зависимостей представлений
CREATE TABLE `list_chats` (
	`id` INT(11) NOT NULL,
	`type` INT(11) NOT NULL COMMENT '1 - обычный чат; 2 - груповой чат',
	`name` VARCHAR(50) NULL COMMENT 'название чата ( только для групового )' COLLATE 'latin1_swedish_ci',
	`description` VARCHAR(50) NULL COMMENT 'описание чата ( только для групового )' COLLATE 'latin1_swedish_ci',
	`client` INT(11) NULL,
	`id_user` INT(11) NULL,
	`mail` VARCHAR(50) NULL COMMENT 'Почта пользователя, используется для авторизации и почтовой рассылки' COLLATE 'utf8_general_ci',
	`id_message` INT(11) NULL,
	`f` VARCHAR(50) NULL COMMENT 'Фамилия' COLLATE 'utf8_general_ci',
	`i` VARCHAR(50) NULL COMMENT 'Имя' COLLATE 'utf8_general_ci',
	`o` VARCHAR(50) NULL COMMENT 'Отчество' COLLATE 'utf8_general_ci',
	`dt_add` VARCHAR(21) NULL COLLATE 'utf8mb4_general_ci',
	`body` VARCHAR(500) NULL COMMENT 'тело сообщения' COLLATE 'utf8_general_ci',
	`status` INT(1) NULL,
	`dt_edited` DATETIME NULL COMMENT 'время редактирования',
	`dt_deleted` DATETIME NULL COMMENT 'время удаления',
	`edited` INT(11) NULL COMMENT 'флаг редактирования',
	`deleted` INT(11) NULL COMMENT 'флаг удаления'
) ENGINE=MyISAM;

-- Дамп структуры для представление server.list_chat_messages
DROP VIEW IF EXISTS `list_chat_messages`;
-- Создание временной таблицы для обработки ошибок зависимостей представлений
CREATE TABLE `list_chat_messages` (
	`id_chat` INT(11) NOT NULL,
	`client` INT(11) NULL,
	`id_message` INT(11) NULL,
	`dt_add` DATETIME NULL COMMENT 'дата и время сообщения',
	`body` VARCHAR(500) NULL COMMENT 'тело сообщения' COLLATE 'utf8_general_ci',
	`id_user` INT(11) NULL,
	`mail` VARCHAR(50) NULL COMMENT 'Почта пользователя, используется для авторизации и почтовой рассылки' COLLATE 'utf8_general_ci',
	`f` VARCHAR(50) NULL COMMENT 'Фамилия' COLLATE 'utf8_general_ci',
	`i` VARCHAR(50) NULL COMMENT 'Имя' COLLATE 'utf8_general_ci',
	`o` VARCHAR(50) NULL COMMENT 'Отчество' COLLATE 'utf8_general_ci',
	`status` INT(1) NULL,
	`dt_edited` DATETIME NULL COMMENT 'время редактирования',
	`dt_deleted` DATETIME NULL COMMENT 'время удаления',
	`edited` INT(11) NULL COMMENT 'флаг редактирования',
	`deleted` INT(11) NULL COMMENT 'флаг удаления'
) ENGINE=MyISAM;

-- Дамп структуры для представление server.list_chat_users
DROP VIEW IF EXISTS `list_chat_users`;
-- Создание временной таблицы для обработки ошибок зависимостей представлений
CREATE TABLE `list_chat_users` (
	`id_chat` INT(11) NOT NULL,
	`id_user` INT(11) NULL,
	`mail` VARCHAR(50) NULL COMMENT 'Почта пользователя, используется для авторизации и почтовой рассылки' COLLATE 'utf8_general_ci',
	`f` VARCHAR(50) NULL COMMENT 'Фамилия' COLLATE 'utf8_general_ci',
	`i` VARCHAR(50) NULL COMMENT 'Имя' COLLATE 'utf8_general_ci',
	`o` VARCHAR(50) NULL COMMENT 'Отчество' COLLATE 'utf8_general_ci',
	`dt_birth` DATE NULL COMMENT 'Дата рождения'
) ENGINE=MyISAM;

-- Дамп структуры для представление server.list_messages
DROP VIEW IF EXISTS `list_messages`;
-- Создание временной таблицы для обработки ошибок зависимостей представлений
CREATE TABLE `list_messages` (
	`id_message` INT(11) NOT NULL,
	`dt_add` DATETIME NOT NULL COMMENT 'дата и время сообщения',
	`body` VARCHAR(500) NOT NULL COMMENT 'тело сообщения' COLLATE 'utf8_general_ci',
	`id_chat` INT(11) NOT NULL,
	`id_user` INT(11) NULL,
	`mail` VARCHAR(50) NULL COMMENT 'Почта пользователя, используется для авторизации и почтовой рассылки' COLLATE 'utf8_general_ci',
	`f` VARCHAR(50) NULL COMMENT 'Фамилия' COLLATE 'utf8_general_ci',
	`i` VARCHAR(50) NULL COMMENT 'Имя' COLLATE 'utf8_general_ci',
	`o` VARCHAR(50) NULL COMMENT 'Отчество' COLLATE 'utf8_general_ci',
	`dt_birth` DATE NULL COMMENT 'Дата рождения',
	`dt_edited` DATETIME NULL COMMENT 'время редактирования',
	`dt_deleted` DATETIME NULL COMMENT 'время удаления',
	`edited` INT(11) NULL COMMENT 'флаг редактирования',
	`deleted` INT(11) NULL COMMENT 'флаг удаления'
) ENGINE=MyISAM;

-- Дамп структуры для представление server.list_users
DROP VIEW IF EXISTS `list_users`;
-- Создание временной таблицы для обработки ошибок зависимостей представлений
CREATE TABLE `list_users` (
	`id_user` INT(11) NOT NULL,
	`mail` VARCHAR(50) NOT NULL COMMENT 'Почта пользователя, используется для авторизации и почтовой рассылки' COLLATE 'utf8_general_ci',
	`f` VARCHAR(50) NOT NULL COMMENT 'Фамилия' COLLATE 'utf8_general_ci',
	`i` VARCHAR(50) NOT NULL COMMENT 'Имя' COLLATE 'utf8_general_ci',
	`o` VARCHAR(50) NULL COMMENT 'Отчество' COLLATE 'utf8_general_ci',
	`dt_birth` VARCHAR(10) NULL COLLATE 'utf8mb4_general_ci',
	`id_avatar` INT(11) NULL
) ENGINE=MyISAM;

-- Дамп структуры для таблица server.messages_status
DROP TABLE IF EXISTS `messages_status`;
CREATE TABLE IF NOT EXISTS `messages_status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user_messages` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_user_messages` (`id_user_messages`),
  KEY `FK___user` (`id_user`),
  CONSTRAINT `FK___user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_user_messages` FOREIGN KEY (`id_user_messages`) REFERENCES `user_messages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='Статус просмотра сообщений';

-- Дамп данных таблицы server.messages_status: ~0 rows (приблизительно)
DELETE FROM `messages_status`;
/*!40000 ALTER TABLE `messages_status` DISABLE KEYS */;
INSERT INTO `messages_status` (`id`, `id_user_messages`, `id_user`, `dt`) VALUES
	(1, 1, 1, '2021-03-22 14:45:17');
/*!40000 ALTER TABLE `messages_status` ENABLE KEYS */;

-- Дамп структуры для таблица server.sessions
DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL COMMENT 'id пользователя сессии',
  `browser` varchar(50) NOT NULL COMMENT 'Название браузера',
  `os` varchar(50) NOT NULL COMMENT 'ОС',
  `platform` varchar(50) NOT NULL COMMENT 'Платформа системы',
  `ip` varchar(50) NOT NULL COMMENT 'IP-адрес каким его видит express.js',
  `iat` datetime NOT NULL COMMENT 'Кода выдан',
  `exp` datetime NOT NULL COMMENT 'Срок действия',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_sessions_users` (`id_user`),
  CONSTRAINT `FK_sessions_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=200 DEFAULT CHARSET=utf8 COMMENT='Таблица сессий пользователей';

-- Дамп данных таблицы server.sessions: ~0 rows (приблизительно)
DELETE FROM `sessions`;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` (`id`, `id_user`, `browser`, `os`, `platform`, `ip`, `iat`, `exp`) VALUES
	(126, 2, 'YaBrowser', 'Windows 10.0', 'Microsoft Windows', '::1', '2020-12-06 14:07:03', '2020-12-06 15:07:16'),
	(198, 1, 'YaBrowser', 'Windows 10.0', 'Microsoft Windows', '::ffff:192.168.1.71', '2021-04-06 20:39:34', '2021-04-06 21:41:51'),
	(199, 2, 'YaBrowser', 'Windows 10.0', 'Microsoft Windows', '::ffff:192.168.1.71', '2021-04-06 20:41:34', '2021-04-06 21:42:17');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;

-- Дамп структуры для таблица server.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(50) NOT NULL COMMENT 'Почта пользователя, используется для авторизации и почтовой рассылки',
  `hash_password` varchar(500) NOT NULL COMMENT 'Хешированный пароль',
  `f` varchar(50) NOT NULL COMMENT 'Фамилия',
  `i` varchar(50) NOT NULL COMMENT 'Имя',
  `o` varchar(50) DEFAULT NULL COMMENT 'Отчество',
  `dt_birth` date NOT NULL COMMENT 'Дата рождения',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='Таблица пользователей';

-- Дамп данных таблицы server.users: ~2 rows (приблизительно)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `mail`, `hash_password`, `f`, `i`, `o`, `dt_birth`) VALUES
	(1, 'admin@mail.ru', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', 'Админов', 'Админ', NULL, '2009-04-06'),
	(2, 'test@test.ru', 'ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413', 'Тестов', 'Тест', NULL, '2017-04-18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Дамп структуры для таблица server.user_chats
DROP TABLE IF EXISTS `user_chats`;
CREATE TABLE IF NOT EXISTS `user_chats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_chat` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_chat` (`id_chat`),
  KEY `FK_user` (`id_user`),
  CONSTRAINT `FK_chat` FOREIGN KEY (`id_chat`) REFERENCES `chats` (`id`),
  CONSTRAINT `FK_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='привязка пользователей к чатам';

-- Дамп данных таблицы server.user_chats: ~4 rows (приблизительно)
DELETE FROM `user_chats`;
/*!40000 ALTER TABLE `user_chats` DISABLE KEYS */;
INSERT INTO `user_chats` (`id`, `id_chat`, `id_user`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 2, 2),
	(4, 2, 1);
/*!40000 ALTER TABLE `user_chats` ENABLE KEYS */;

-- Дамп структуры для таблица server.user_files
DROP TABLE IF EXISTS `user_files`;
CREATE TABLE IF NOT EXISTS `user_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `type` int(11) NOT NULL COMMENT 'Тип ресурса ( 1 - Фотографии пользователей )',
  `filename` varchar(100) NOT NULL COMMENT 'Название файла',
  `encoding` varchar(100) NOT NULL COMMENT 'Кодировка',
  `mimetype` varchar(100) NOT NULL COMMENT 'Mime тип',
  `buffer` longblob NOT NULL COMMENT 'Тело файла',
  `size` int(11) NOT NULL COMMENT 'Размер файла',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8 COMMENT='Таблица хранит файлы пользователей';

-- Дамп данных таблицы server.user_files: ~0 rows (приблизительно)
DELETE FROM `user_files`;
/*!40000 ALTER TABLE `user_files` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_files` ENABLE KEYS */;

-- Дамп структуры для таблица server.user_friends
DROP TABLE IF EXISTS `user_friends`;
CREATE TABLE IF NOT EXISTS `user_friends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user1` int(11) NOT NULL COMMENT 'Пользователь 1',
  `id_user2` int(11) NOT NULL COMMENT 'Пользователь 2',
  `confirm_user1` int(1) NOT NULL DEFAULT '1' COMMENT 'Подтверждение пользователя 1',
  `confirm_user2` int(1) DEFAULT NULL COMMENT 'Подтверждение пользователя 2',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_user_friends_id_user1` (`id_user1`),
  KEY `FK_user_friends_id_user2` (`id_user2`),
  CONSTRAINT `FK_user_friends_id_user1` FOREIGN KEY (`id_user1`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_user_friends_id_user2` FOREIGN KEY (`id_user2`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Если пользователь 1 и 2 подтвердят запись, то они являются друзьями';

-- Дамп данных таблицы server.user_friends: ~0 rows (приблизительно)
DELETE FROM `user_friends`;
/*!40000 ALTER TABLE `user_friends` DISABLE KEYS */;
INSERT INTO `user_friends` (`id`, `id_user1`, `id_user2`, `confirm_user1`, `confirm_user2`) VALUES
	(1, 1, 2, 1, 1);
/*!40000 ALTER TABLE `user_friends` ENABLE KEYS */;

-- Дамп структуры для таблица server.user_groups
DROP TABLE IF EXISTS `user_groups`;
CREATE TABLE IF NOT EXISTS `user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_group` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_group` (`id_group`),
  CONSTRAINT `FK__groups` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`),
  CONSTRAINT `FK__users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='Таблица связывания пользователя с группами';

-- Дамп данных таблицы server.user_groups: ~5 rows (приблизительно)
DELETE FROM `user_groups`;
/*!40000 ALTER TABLE `user_groups` DISABLE KEYS */;
INSERT INTO `user_groups` (`id`, `id_user`, `id_group`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 3),
	(4, 2, 2),
	(5, 2, 3);
/*!40000 ALTER TABLE `user_groups` ENABLE KEYS */;

-- Дамп структуры для таблица server.user_messages
DROP TABLE IF EXISTS `user_messages`;
CREATE TABLE IF NOT EXISTS `user_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_chat` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `dt_add` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'дата и время сообщения',
  `dt_edited` datetime DEFAULT NULL COMMENT 'время редактирования',
  `dt_deleted` datetime DEFAULT NULL COMMENT 'время удаления',
  `body` varchar(500) NOT NULL COMMENT 'тело сообщения',
  `edited` int(11) DEFAULT NULL COMMENT 'флаг редактирования',
  `deleted` int(11) DEFAULT NULL COMMENT 'флаг удаления',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK_chat1` (`id_chat`),
  KEY `FK_user1` (`id_user`),
  CONSTRAINT `FK_chat1` FOREIGN KEY (`id_chat`) REFERENCES `chats` (`id`),
  CONSTRAINT `FK_user1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=138 DEFAULT CHARSET=utf8 COMMENT='таблица сообщений пользователя';

-- Дамп данных таблицы server.user_messages: ~0 rows (приблизительно)
DELETE FROM `user_messages`;
/*!40000 ALTER TABLE `user_messages` DISABLE KEYS */;
INSERT INTO `user_messages` (`id`, `id_chat`, `id_user`, `dt_add`, `dt_edited`, `dt_deleted`, `body`, `edited`, `deleted`) VALUES
	(135, 1, 1, '2021-04-06 20:40:46', NULL, NULL, 'Привет!', NULL, NULL),
	(136, 2, 1, '2021-04-06 20:40:59', NULL, NULL, 'Привет!', NULL, NULL),
	(137, 2, 2, '2021-04-06 20:41:51', NULL, NULL, 'Ку!', NULL, NULL);
/*!40000 ALTER TABLE `user_messages` ENABLE KEYS */;

-- Дамп структуры для представление server.list_chats
DROP VIEW IF EXISTS `list_chats`;
-- Удаление временной таблицы и создание окончательной структуры представления
DROP TABLE IF EXISTS `list_chats`;
CREATE ALGORITHM=MERGE SQL SECURITY DEFINER VIEW `list_chats` AS select `c`.`id` AS `id`,`c`.`type` AS `type`,`c`.`name` AS `name`,`c`.`description` AS `description`,`uc`.`id_user` AS `client`,`l_m`.`id_user` AS `id_user`,`l_m`.`mail` AS `mail`,`l_m`.`id_message` AS `id_message`,`l_m`.`f` AS `f`,`l_m`.`i` AS `i`,`l_m`.`o` AS `o`,date_format(`l_m`.`dt_add`,'%d.%m.%Y %H:%i') AS `dt_add`,`l_m`.`body` AS `body`,(case when (`ms`.`id` is not null) then 1 else NULL end) AS `status`,`l_m`.`dt_edited` AS `dt_edited`,`l_m`.`dt_deleted` AS `dt_deleted`,`l_m`.`edited` AS `edited`,`l_m`.`deleted` AS `deleted` from (((`server`.`chats` `c` left join `server`.`user_chats` `uc` on((`c`.`id` = `uc`.`id_chat`))) left join (select `um`.`id` AS `id_message`,`um`.`id_chat` AS `id_chat`,`u`.`id` AS `id_user`,`u`.`mail` AS `mail`,`u`.`f` AS `f`,`u`.`i` AS `i`,`u`.`o` AS `o`,`um`.`dt_add` AS `dt_add`,`um`.`body` AS `body`,`um`.`dt_edited` AS `dt_edited`,`um`.`dt_deleted` AS `dt_deleted`,`um`.`edited` AS `edited`,`um`.`deleted` AS `deleted` from (`server`.`user_messages` `um` left join `server`.`users` `u` on((`um`.`id_user` = `u`.`id`))) where (`um`.`dt_add` = (select max(`server`.`user_messages`.`dt_add`) from `server`.`user_messages` where ((`server`.`user_messages`.`id_chat` = `um`.`id_chat`) and isnull(`um`.`deleted`))))) `l_m` on((`c`.`id` = `l_m`.`id_chat`))) left join `server`.`messages_status` `ms` on(((`uc`.`id_user` = `ms`.`id_user`) and (`l_m`.`id_message` = `ms`.`id_user_messages`))));

-- Дамп структуры для представление server.list_chat_messages
DROP VIEW IF EXISTS `list_chat_messages`;
-- Удаление временной таблицы и создание окончательной структуры представления
DROP TABLE IF EXISTS `list_chat_messages`;
CREATE ALGORITHM=MERGE SQL SECURITY DEFINER VIEW `list_chat_messages` AS select `uc`.`id_chat` AS `id_chat`,`c`.`id` AS `client`,`um`.`id` AS `id_message`,`um`.`dt_add` AS `dt_add`,`um`.`body` AS `body`,`u`.`id` AS `id_user`,`u`.`mail` AS `mail`,`u`.`f` AS `f`,`u`.`i` AS `i`,`u`.`o` AS `o`,(case when (`ms`.`id` is not null) then 1 else NULL end) AS `status`,`um`.`dt_edited` AS `dt_edited`,`um`.`dt_deleted` AS `dt_deleted`,`um`.`edited` AS `edited`,`um`.`deleted` AS `deleted` from ((((`user_chats` `uc` left join `users` `c` on((`uc`.`id_user` = `c`.`id`))) left join `user_messages` `um` on((`uc`.`id_chat` = `um`.`id_chat`))) left join `users` `u` on((`um`.`id_user` = `u`.`id`))) left join `messages_status` `ms` on(((`c`.`id` = `ms`.`id_user`) and (`um`.`id` = `ms`.`id_user_messages`)))) order by `uc`.`id_chat`,`c`.`id`,`um`.`id` desc;

-- Дамп структуры для представление server.list_chat_users
DROP VIEW IF EXISTS `list_chat_users`;
-- Удаление временной таблицы и создание окончательной структуры представления
DROP TABLE IF EXISTS `list_chat_users`;
CREATE ALGORITHM=MERGE SQL SECURITY DEFINER VIEW `list_chat_users` AS select `c`.`id` AS `id_chat`,`u`.`id` AS `id_user`,`u`.`mail` AS `mail`,`u`.`f` AS `f`,`u`.`i` AS `i`,`u`.`o` AS `o`,`u`.`dt_birth` AS `dt_birth` from ((`chats` `c` left join `user_chats` `uc` on((`uc`.`id_chat` = `c`.`id`))) left join `users` `u` on((`u`.`id` = `uc`.`id_user`)));

-- Дамп структуры для представление server.list_messages
DROP VIEW IF EXISTS `list_messages`;
-- Удаление временной таблицы и создание окончательной структуры представления
DROP TABLE IF EXISTS `list_messages`;
CREATE ALGORITHM=MERGE SQL SECURITY DEFINER VIEW `list_messages` AS select `um`.`id` AS `id_message`,`um`.`dt_add` AS `dt_add`,`um`.`body` AS `body`,`um`.`id_chat` AS `id_chat`,`u`.`id` AS `id_user`,`u`.`mail` AS `mail`,`u`.`f` AS `f`,`u`.`i` AS `i`,`u`.`o` AS `o`,`u`.`dt_birth` AS `dt_birth`,`um`.`dt_edited` AS `dt_edited`,`um`.`dt_deleted` AS `dt_deleted`,`um`.`edited` AS `edited`,`um`.`deleted` AS `deleted` from (`user_messages` `um` left join `users` `u` on((`um`.`id_user` = `u`.`id`)));

-- Дамп структуры для представление server.list_users
DROP VIEW IF EXISTS `list_users`;
-- Удаление временной таблицы и создание окончательной структуры представления
DROP TABLE IF EXISTS `list_users`;
CREATE ALGORITHM=MERGE SQL SECURITY DEFINER VIEW `list_users` AS select `u`.`id` AS `id_user`,`u`.`mail` AS `mail`,`u`.`f` AS `f`,`u`.`i` AS `i`,`u`.`o` AS `o`,date_format(`u`.`dt_birth`,'%d.%m.%Y') AS `dt_birth`,`a`.`id` AS `id_avatar` from (`server`.`users` `u` left join (select `uf`.`id` AS `id`,`uf`.`id_user` AS `id_user`,`uf`.`type` AS `type`,`uf`.`filename` AS `filename`,`uf`.`encoding` AS `encoding`,`uf`.`mimetype` AS `mimetype`,`uf`.`buffer` AS `buffer`,`uf`.`size` AS `size` from `server`.`user_files` `uf` where ((`uf`.`type` = 1) and (`uf`.`id` = (select max(`server`.`user_files`.`id`) from `server`.`user_files` where (`server`.`user_files`.`id_user` = `uf`.`id_user`))))) `a` on((`u`.`id` = `a`.`id_user`)));

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
