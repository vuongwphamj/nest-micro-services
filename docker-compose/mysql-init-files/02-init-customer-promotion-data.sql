USE `nab-customer-service`;

-- Promotions
INSERT INTO `Promotions` (`id`, `name`, `desciption`,`createdBy`, `updatedBy`, `createdAt`, `updatedAt`, `deleted`) VALUES 
('promotion_ddd6ddbd-8ea1-475c-80fb-ad1687c551cd', 'Buy 1 get 1 free', 'Buy 1 get 1 free', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('promotion_40d1c53c-4044-4627-9970-e8a0dc627522', 'Freeship', 'Freeship', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('promotion_0c6be8a9-cce0-43d4-93cd-58dc66f429af', 'Sale Off 50%', 'Sale Off 50%', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('promotion_d4013c84-1fc8-4aab-b0c0-79326151c2eb', 'Sale Off 30%', 'Sale Off 30%', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('promotion_221ea1e7-3c3a-4dd3-8d3a-75b96dcd3a4c', 'Sale Off 20%', 'Sale Off 20%', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0);

-- CustomerPromotions
INSERT INTO `CustomerPromotions` (`id`, `customerId`, `promotionId`,`createdBy`, `updatedBy`, `createdAt`, `updatedAt`, `deleted`) VALUES 

-- 8ea031c8-3d2e-4996-85dc-d3dff5userid
('cuspromotion_05fb2f4d-a244-4a2f-9641-8d7bf73e5422', '8ea031c8-3d2e-4996-85dc-d3dff5userid', 'promotion_ddd6ddbd-8ea1-475c-80fb-ad1687c551cd', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('cuspromotion_19bc944f-4a52-441f-a142-91ab81aa39d8', '8ea031c8-3d2e-4996-85dc-d3dff5userid', 'promotion_40d1c53c-4044-4627-9970-e8a0dc627522', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('cuspromotion_e84a51ed-d01d-4e2c-9aab-7cf7b2142c53', '8ea031c8-3d2e-4996-85dc-d3dff5userid', 'promotion_0c6be8a9-cce0-43d4-93cd-58dc66f429af', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('cuspromotion_8836339a-0239-4f95-bb77-863ce7409011', '8ea031c8-3d2e-4996-85dc-d3dff5userid', 'promotion_0c6be8a9-cce0-43d4-93cd-58dc66f429af', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('cuspromotion_bb6bcda7-67f0-4beb-b083-59dfa04609a5', '8ea031c8-3d2e-4996-85dc-d3dff5userid', 'promotion_d4013c84-1fc8-4aab-b0c0-79326151c2eb', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),

-- 55f93fb7-2667-4716-aa17-57a731userid
('cuspromotion_e1a4f448-a9a8-4490-9e7e-98013c8af0bb', '55f93fb7-2667-4716-aa17-57a731userid', 'promotion_ddd6ddbd-8ea1-475c-80fb-ad1687c551cd', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('cuspromotion_4944a3ae-e9f1-475a-953b-9bccf650441d', '55f93fb7-2667-4716-aa17-57a731userid', 'promotion_40d1c53c-4044-4627-9970-e8a0dc627522', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('cuspromotion_72803f40-204c-4cc3-b3c4-92efcdd86cf3', '55f93fb7-2667-4716-aa17-57a731userid', 'promotion_0c6be8a9-cce0-43d4-93cd-58dc66f429af', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),

-- 364c22b4-fab1-40bf-a29e-d5740buserid
('cuspromotion_60078ea7-0a6c-49d9-ab4b-59ea25177129', '364c22b4-fab1-40bf-a29e-d5740buserid', 'promotion_0c6be8a9-cce0-43d4-93cd-58dc66f429af', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0),
('cuspromotion_1b264812-90a7-4b5e-a66c-ec396f367492', '364c22b4-fab1-40bf-a29e-d5740buserid', 'promotion_d4013c84-1fc8-4aab-b0c0-79326151c2eb', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', 'user_a4ce3fe0-8420-4695-a0de-1ba03d6ec9e0', '2021-07-07 23:38:57',	'2021-07-07 23:38:57',	0);