import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Photo } from "./photo.entity";
import { ApiProperty, ApiExtraModels } from "@nestjs/swagger";

@Entity({ name: "service-users:User" })
export class User {

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    @ApiProperty()
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @ApiProperty()
    @Column("nvarchar", { length: 20 })
    firstName: string;

    @ApiProperty()
    @Column("nvarchar", { length: 20 })
    lastName: string;

    @ApiProperty({
        type: Number
    })
    @Column("tinyint", { nullable: true })
    age: number;

    @ApiProperty({
        isArray: true,
        type: () => Photo
    })
    @OneToMany(type => Photo, photo => photo.user, { cascade:true })
    photos: Photo[];
}
