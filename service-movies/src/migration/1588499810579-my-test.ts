import {MigrationInterface, QueryRunner} from "typeorm";

export class myTest1588499810579 implements MigrationInterface {
    name = 'myTest1588499810579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `service-movies:Movies` DROP COLUMN `description`", undefined);
        await queryRunner.query("ALTER TABLE `service-movies:Movies` ADD `description` varchar(5000) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `service-movies:Movies` DROP COLUMN `description`", undefined);
        await queryRunner.query("ALTER TABLE `service-movies:Movies` ADD `description` varchar(500) NOT NULL", undefined);
    }

}
