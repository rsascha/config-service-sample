FROM node:lts-alpine AS build
WORKDIR /build

COPY . .

ENTRYPOINT ["npm", "run", "typeorm:migration:run"]
