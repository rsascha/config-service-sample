FROM node:lts-alpine AS build
WORKDIR /build

COPY . .
COPY k8s/config/ormconfig.json .
RUN ["npm", "install"]

#ENTRYPOINT ["npm", "run", "typeorm:migration:run"]
