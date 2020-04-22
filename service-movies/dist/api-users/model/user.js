"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}
exports.User = User;
User.discriminator = undefined;
User.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "age",
        "baseName": "age",
        "type": "number"
    },
    {
        "name": "photos",
        "baseName": "photos",
        "type": "Array<Photo>"
    }
];
//# sourceMappingURL=user.js.map