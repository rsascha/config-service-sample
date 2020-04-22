"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class myTest1587300322929 {
    constructor() {
        this.name = 'myTest1587300322929';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `service-users:User` (`id` varchar(36) NOT NULL, `firstName` varchar(20) NOT NULL, `lastName` varchar(20) NOT NULL, `age` tinyint NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `service-users:Photo` (`id` varchar(36) NOT NULL, `name` varchar(20) NOT NULL, `userId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `service-users:Photo` ADD CONSTRAINT `FK_279d26848b6f47ebb2be58d4c29` FOREIGN KEY (`userId`) REFERENCES `service-users:User`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `service-users:Photo` DROP FOREIGN KEY `FK_279d26848b6f47ebb2be58d4c29`", undefined);
        await queryRunner.query("DROP TABLE `service-users:Photo`", undefined);
        await queryRunner.query("DROP TABLE `service-users:User`", undefined);
    }
}
exports.myTest1587300322929 = myTest1587300322929;
//# sourceMappingURL=1587300322929-my-test.js.map