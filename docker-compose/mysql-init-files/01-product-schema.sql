USE `nab-product-service`;

DROP TABLE IF EXISTS `ProductEvents`;
CREATE TABLE `ProductEvents` (
  `id` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `payload` varchar(500),
  `createdBy` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
  `id` varchar(50) NOT NULL,
  `createdBy` varchar(50) NOT NULL,
  `updatedBy` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deleted` tinyint NOT NULL,
  `name` varchar(255) NOT NULL,
  `catId` varchar(50),
  `status` varchar(255),
  `price` decimal,
  `discountPrice` decimal,
  `quanity` decimal,
  `brand` varchar(50),
  `color` varchar(50),
  `size` varchar(50),
  `width` varchar(50),
  `height` varchar(50),
  `original` varchar(50),
  `description` varchar(500),
  PRIMARY KEY (`id`)
);

