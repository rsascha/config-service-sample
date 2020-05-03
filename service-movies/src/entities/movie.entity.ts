import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ApiProperty, ApiExtraModels } from "@nestjs/swagger";

@Entity({ name: "service-movies:Movies" })
export class Movie {

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }

    @ApiProperty()
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @ApiProperty()
    @Column("nvarchar", { length: 20 })
    title: string;

    @ApiProperty()
    @Column("nvarchar", { length: 5000 })
    description: string;
}
