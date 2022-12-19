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
     `category` VARCHAR(300)  NOT NULL ,
    `job_title` VARCHAR(300)  NOT NULL ,
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
    `firm_city` VARCHAR(500)  NULL ,
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

INSERT INTO job (category, job_title) VALUES ('Technologies','Développeur Back End');
INSERT INTO job (category, job_title) VALUES ('Technologies','Développeur Front End');
INSERT INTO job (category, job_title) VALUES ('Technologies','Développeur Full Stack');
INSERT INTO job (category, job_title) VALUES ('Technologies','DevOps');
INSERT INTO job (category, job_title) VALUES ('Technologies','Lead technique');
INSERT INTO job (category, job_title) VALUES ('Technologies','Architecte Infrastructure');
INSERT INTO job (category, job_title) VALUES ('Technologies','Scrum master');
INSERT INTO job (category, job_title) VALUES ('Technologies','Product owner');
INSERT INTO job (category, job_title) VALUES ('Technologies','Product Manager');
INSERT INTO job (category, job_title) VALUES ('Technologies','Ingénieur Test');
INSERT INTO job (category, job_title) VALUES ('Technologies','UX / UI designer');
INSERT INTO job (category, job_title) VALUES ('Technologies','Administrateur Système  Réseaux');
INSERT INTO job (category, job_title) VALUES ('Technologies','Ingénieur Système Cloud');
INSERT INTO job (category, job_title) VALUES ('Technologies','Architecte Logiciel');
INSERT INTO job (category, job_title) VALUES ('Technologies','Ingénieur Hardware');
INSERT INTO job (category, job_title) VALUES ('Technologies','Analyste fonctionnel / AMOA');
INSERT INTO job (category, job_title) VALUES ('Technologies','Intégrateur Web');
INSERT INTO job (category, job_title) VALUES ('Technologies','Ingénieur Logiciel Embarqué');
INSERT INTO job (category, job_title) VALUES ('Technologies','Technicien support');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Directeur du Système d Informations');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Directeur / chef de projet');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Directeur technique / CTO');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Responsable de la Sécurité du Système Informatique');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Directeur Marketing');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Service Delivery Manager');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Customer Success Manager');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Chief Operating Officer');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Business Developper');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Growth Hacker');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Expert SEO Trafic content Manager');
INSERT INTO job (category, job_title) VALUES ('Management / Marketing','Chef de projet Web');
INSERT INTO job (category, job_title) VALUES ('DATA','Data Architect');
INSERT INTO job (category, job_title) VALUES ('DATA','Data Engineer');
INSERT INTO job (category, job_title) VALUES ('DATA','Data Analyst');
INSERT INTO job (category, job_title) VALUES ('DATA','Data Scientist');
INSERT INTO job (category, job_title) VALUES ('Ressources humaines','Consultant en recrutement IT');
INSERT INTO job (category, job_title) VALUES ('Ressources humaines','Recruteur tech');
