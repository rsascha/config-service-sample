import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";
import { ApiProperty, ApiExtraModels } from "@nestjs/swagger";

@Entity({ name: "service-users:Photo" })
export class Photo {

    constructor(name: string) {
        this.name = name;
    }

    @ApiProperty()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty()
    @Column("nvarchar", { length: 20 })
    name: string;

    @ManyToOne(type => User, user => user.photos)
    user: User;
}
