FROM node:lts-alpine AS build
WORKDIR /build

COPY . .

RUN ["npm", "install"]
RUN ["npm", "run", "build"]

FROM node:lts-alpine
WORKDIR /application
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/dist .
EXPOSE 3333
ENTRYPOINT ["node", "main"]
