"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Photo {
    static getAttributeTypeMap() {
        return Photo.attributeTypeMap;
    }
}
exports.Photo = Photo;
Photo.discriminator = undefined;
Photo.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=photo.js.map