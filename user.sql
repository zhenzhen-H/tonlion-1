/*
Navicat MySQL Data Transfer

Source Server         : wamp1
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : db1

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-25 19:50:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '1232', 'fds');
INSERT INTO `user` VALUES ('2', '2', '2');
INSERT INTO `user` VALUES ('3', '1', '1');
INSERT INTO `user` VALUES ('4', '3', '3');
INSERT INTO `user` VALUES ('5', '4', '4');
INSERT INTO `user` VALUES ('6', '0', '0');
INSERT INTO `user` VALUES ('7', '7', '7');
INSERT INTO `user` VALUES ('8', 'm', 'm');
