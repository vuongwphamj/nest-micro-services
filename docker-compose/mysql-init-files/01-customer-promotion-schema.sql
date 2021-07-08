USE `nab-customer-service`;

DROP TABLE IF EXISTS `Promotions`;
CREATE TABLE `Promotions` (
  `id` varchar(50) NOT NULL,
  `createdBy` varchar(50) NOT NULL,
  `updatedBy` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted` tinyint NOT NULL,
  `name` varchar(255) NOT NULL,
  `desciption` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `CustomerPromotions`;
CREATE TABLE `CustomerPromotions` (
  `id` varchar(50) NOT NULL,
  `createdBy` varchar(50) NOT NULL,
  `updatedBy` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted` tinyint NOT NULL,
  `customerId` varchar(50) NOT NULL,
  `promotionId` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT FK_CustomerPromotion FOREIGN KEY (promotionId)
  REFERENCES `Promotions`(id)
);