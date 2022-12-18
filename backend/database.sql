DROP DATABASE IF EXISTS externatic;
CREATE DATABASE externatic;
USE externatic;

CREATE TABLE `user` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `role_id` int  NOT NULL ,
    `gender` int  NOT NULL ,
    `firstname` VARCHAR(50)  NOT NULL ,
    `lastname` VARCHAR(50)  NOT NULL ,
    `email` VARCHAR(50)  NOT NULL ,
    `city` VARCHAR(100)  NOT NULL ,
    `postal_code` int  NOT NULL ,
    `country` VARCHAR(100)  NOT NULL ,
    `adress` VARCHAR(100)  NOT NULL ,
    `phone` VARCHAR(100)  NULL ,
    `isActive` BOOLEAN  NOT NULL ,
    `linkedin` VARCHAR(100)  NULL ,
    `website` VARCHAR(100)  NULL ,
    `github` VARCHAR(100)  NULL ,
    `actual_job` VARCHAR(100)  NOT NULL ,
    `job_id` int  NULL ,
    `salary` int  NULL ,
    `diploma` VARCHAR(200)  NULL ,
    `handicap` BOOLEAN  NOT NULL ,
    `password` VARCHAR(100)  NOT NULL ,
    `hard_skills` VARCHAR(500)  NULL ,
    `experience_id` int  NULL ,
    `contract_id` int  NULL ,
    `consultant_id` int  NOT NULL ,
    `userNote` VARCHAR(1000)  NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `admin` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `role_id` int  NOT NULL ,
    `firstname` VARCHAR(50)  NOT NULL ,
    `lastname` VARCHAR(50)  NOT NULL ,
    `email` VARCHAR(40)  NOT NULL ,
    `password` VARCHAR(100)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `consultant` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `role_id` int  NOT NULL ,
    `firstname` VARCHAR(30)  NOT NULL ,
    `lastname` VARCHAR(30)  NOT NULL ,
    `phone` VARCHAR(100)  NOT NULL ,
    `city` VARCHAR(100)  NOT NULL ,
    `email` VARCHAR(40)  NOT NULL ,
    `password` VARCHAR(100)  NOT NULL ,
    `linkedin` VARCHAR(100)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `firm` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `email` VARCHAR(100)  NOT NULL ,
    `password` VARCHAR(100)  NOT NULL ,
    `name` VARCHAR(50)  NOT NULL ,
    `contact` VARCHAR(100)  NOT NULL ,
    `contact_phone` VARCHAR(100)  NOT NULL ,
    `city` VARCHAR(100)  NULL ,
    `postal_code` int  NOT NULL ,
    `country` VARCHAR(100)  NOT NULL ,
    `adress` VARCHAR(60)  NOT NULL ,
    `type` VARCHAR(100)  NOT NULL ,
    `logo_url` VARCHAR(150)  NOT NULL ,
    `consultant_id` int  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `role` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `status` VARCHAR(60)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `job` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `job` VARCHAR(300)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `experience` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `experience` int  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `offer` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `title` VARCHAR(100)  NOT NULL ,
    `firm_id` int  NOT NULL ,
    `firm_logo_url` VARCHAR(200)  NULL ,
    `firm_city` int  NULL ,
    `date` DATE  NOT NULL ,
    `postal_code` int  NOT NULL ,
    `country` int  NOT NULL ,
    `adress` VARCHAR(60)  NOT NULL ,
    `job_id` int  NOT NULL ,
    `salary` int  NULL ,
    `description_firm` VARCHAR(500)  NOT NULL ,
    `description_mission` VARCHAR(500)  NOT NULL ,
    `soft_skills` VARCHAR(500)  NOT NULL ,
    `hard_skills` VARCHAR(500)  NOT NULL ,
    `experience_id` int  NOT NULL ,
    `contract_type` int  NOT NULL ,
    `consultant_id` int  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);
CREATE TABLE `user_offer` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `isFavorite` BOOLEAN  NOT NULL ,
    `candidated` BOOLEAN  NOT NULL ,
    `offer_id` int  NOT NULL ,
    `user_id` int  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);

CREATE TABLE `contract` (
    `id` int AUTO_INCREMENT NOT NULL ,
    `contract_type` VARCHAR(100)  NOT NULL ,
    PRIMARY KEY (
        `id`
    )
);



ALTER TABLE `user` ADD CONSTRAINT `fk_user_role_id` FOREIGN KEY(`role_id`)
REFERENCES `role` (`id`);

ALTER TABLE `user` ADD CONSTRAINT `fk_user_job_id` FOREIGN KEY(`job_id`)
REFERENCES `job` (`id`);

ALTER TABLE `user` ADD CONSTRAINT `fk_user_experience_id` FOREIGN KEY(`experience_id`)
REFERENCES `experience` (`id`);

ALTER TABLE `user` ADD CONSTRAINT `fk_user_contract_id` FOREIGN KEY(`contract_id`)
REFERENCES `contract` (`id`);

ALTER TABLE `user` ADD CONSTRAINT `fk_user_consultant_id` FOREIGN KEY(`consultant_id`)
REFERENCES `consultant` (`id`);

ALTER TABLE `admin` ADD CONSTRAINT `fk_admin_role_id` FOREIGN KEY(`role_id`)
REFERENCES `role` (`id`);

ALTER TABLE `consultant` ADD CONSTRAINT `fk_consultant_role_id` FOREIGN KEY(`role_id`)
REFERENCES `role` (`id`);

ALTER TABLE `firm` ADD CONSTRAINT `fk_firm_consultant_id` FOREIGN KEY(`consultant_id`)
REFERENCES `consultant` (`id`);

ALTER TABLE `offer` ADD CONSTRAINT `fk_offer_firm_id` FOREIGN KEY(`firm_id`)
REFERENCES `firm` (`id`);

ALTER TABLE `offer` ADD CONSTRAINT `fk_offer_job_id` FOREIGN KEY(`job_id`)
REFERENCES `job` (`id`);

ALTER TABLE `offer` ADD CONSTRAINT `fk_offer_experience_id` FOREIGN KEY(`experience_id`)
REFERENCES `experience` (`id`);

ALTER TABLE `offer` ADD CONSTRAINT `fk_offer_contract_type` FOREIGN KEY(`contract_type`)
REFERENCES `contract` (`id`);

ALTER TABLE `offer` ADD CONSTRAINT `fk_offer_consultant_id` FOREIGN KEY(`consultant_id`)
REFERENCES `consultant` (`id`);

ALTER TABLE `user_offer` ADD CONSTRAINT `fk_user_offer_offer_id` FOREIGN KEY(`offer_id`)
REFERENCES `offer` (`id`);

ALTER TABLE `user_offer` ADD CONSTRAINT `fk_user_offer_user_id` FOREIGN KEY(`user_id`)
REFERENCES `user` (`id`);

INSERT INTO role (status) VALUES('user');
INSERT INTO role (status) VALUES('consultant');
INSERT INTO role (status) VALUES('admin');

INSERT INTO firm (email, password, name, contact_phone, city, postal_code, country, adress, type, logo_url, consultant_id) 
VALUES('contact@betclic.com', 'password', 'Betclic Group', '05 10 20 30 40', 'Bordeaux', 33000, 'France', '117 Quai de Bacalan', 'IT', 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/fe/Logo_Betclic_2019.svg/langfr-340px-Logo_Betclic_2019.svg.png', 1),
('contact@cdiscount.com', 'password', 'Cdiscount', '05 56 89 09 76', 'Bordeaux', 33000, 'France', '120-126 Quai de Bacalan', 'IT', 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/74/Logo-Cdiscount-baseline.png/560px-Logo-Cdiscount-baseline.png', 2),
('contact@kwantic.com', 'password', 'Kwantic', '05 30 90 78 65', 'Bordeaux', 33000, 'France', '74 Rue Georges Bonnac', 'IT', 'https://kwantic.fr/wp-content/uploads/2022/01/logo-kwantic-noir-et-blanc-sur-jaune.svg', 3);

INSERT INTO contract (id, contract_type) VALUES(1, 'CDI'), (2, 'CDD'), (3, 'Stage'), (4, 'Alternance');
