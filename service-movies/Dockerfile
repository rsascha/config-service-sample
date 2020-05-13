FROM node:lts-alpine AS build

# Prepare build image
RUN apk update
RUN apk add gettext python3 make g++

# Prepare build
WORKDIR /build
COPY . .

# Start build process
RUN npm run docker:install
RUN npm run docker:build

# Generate docker image for production 
FROM node:lts-alpine
WORKDIR /application
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/dist .
EXPOSE 3334
ENTRYPOINT ["node", "main"]
