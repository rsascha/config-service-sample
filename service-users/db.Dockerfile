FROM node:lts-alpine AS build
WORKDIR /build

COPY . .
RUN ["npm", "install"]

ENTRYPOINT ["npm", "run", "typeorm:migration:run"]
