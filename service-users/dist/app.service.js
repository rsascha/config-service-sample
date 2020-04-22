"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const photo_entity_1 = require("./entities/photo.entity");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    getFirstName() {
        const names = ['Otto', 'Max', 'Florian', 'Emilia', 'Sarah', 'Lina', 'Leonie', 'Elias', 'Emil', 'Theo'];
        const pos = Math.floor(Math.random() * names.length);
        return names[pos];
    }
    getLastName() {
        const names = ['Müller', 'Mustermann', 'Metzgermeister', 'Schmidt', 'Schneider', 'Fischer', 'Meyer'];
        const pos = Math.floor(Math.random() * names.length);
        return names[pos];
    }
    getAge() {
        return Math.floor(Math.random() * 100);
    }
    async generateDummyData() {
        const connection = typeorm_1.getConnection();
        const manager = connection.manager;
        const newUser = new user_entity_1.User(this.getFirstName(), this.getLastName(), this.getAge());
        newUser.photos = [];
        for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
            newUser.photos.push(new photo_entity_1.Photo(`Picture of ${this.getFirstName()}`));
        }
        return manager.save(newUser)
            .then(result => {
            return result;
        })
            .catch(exception => {
            return exception;
        });
    }
    ;
    async getUsers() {
        const connection = typeorm_1.getConnection();
        const photoRepository = connection.getRepository(user_entity_1.User);
        const users = await photoRepository.find({ relations: ["photos"] });
        return users;
    }
    ;
    async getPhotos() {
        const connection = typeorm_1.getConnection();
        const photoRepository = connection.getRepository(photo_entity_1.Photo);
        const photos = await photoRepository.find({});
        return photos;
    }
    ;
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map