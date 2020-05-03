import {MigrationInterface, QueryRunner} from "typeorm";

export class myTest1588498426826 implements MigrationInterface {
    name = 'myTest1588498426826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `service-movies:Movies` (`id` varchar(36) NOT NULL, `title` varchar(20) NOT NULL, `description` varchar(500) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `service-movies:Movies`", undefined);
    }

}
