SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for event
-- ----------------------------
DROP TABLE IF EXISTS `event`;
CREATE TABLE `event` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `event_start_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `event_end_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `event_description` varchar(100) DEFAULT NULL,
  `room_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`event_id`),
  KEY `FK_Schedule_User` (`user_id`),
  KEY `FK_Schedule_Room` (`room_id`),
  CONSTRAINT `FK_Schedule_Room` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`),
  CONSTRAINT `FK_Schedule_User` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of event
-- ----------------------------
INSERT INTO `event` VALUES ('1', '2018-12-25 00:45:00', '2018-12-25 01:15:00', 'Evento 01', '1', '1');
INSERT INTO `event` VALUES ('2', '2018-12-30 21:57:44', '2018-12-30 13:00:00', 'Evento 02', '2', '2');

-- ----------------------------
-- Table structure for room
-- ----------------------------
DROP TABLE IF EXISTS `room`;
CREATE TABLE `room` (
  `room_id` int(11) NOT NULL AUTO_INCREMENT,
  `room_name` varchar(100) NOT NULL,
  PRIMARY KEY (`room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of room
-- ----------------------------
INSERT INTO `room` VALUES ('1', 'Fisio Room');
INSERT INTO `room` VALUES ('2', 'Pilates Room');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(250) NOT NULL,
  `user_admin` bit(1) NOT NULL DEFAULT b'0',
  `user_register_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'João Carlos', 'jcheringer88@hotmail.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '', '2018-12-25 00:10:54');
INSERT INTO `user` VALUES ('2', 'Igor Henrique', 'igor@email.com', '7c4a8d09ca3762af61e59520943dc26494f8941b', '\0', '2018-12-30 17:56:52');

-- ----------------------------
-- Table structure for user_room
-- ----------------------------
DROP TABLE IF EXISTS `user_room`;
CREATE TABLE `user_room` (
  `user_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`room_id`),
  KEY `FK_UserRoom_Room` (`room_id`),
  CONSTRAINT `FK_UserRoom_Room` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_UserRoom_User` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user_room
-- ----------------------------
INSERT INTO `user_room` VALUES ('1', '1');
INSERT INTO `user_room` VALUES ('1', '2');
INSERT INTO `user_room` VALUES ('2', '1');
