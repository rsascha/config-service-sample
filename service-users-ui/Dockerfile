FROM node:lts-alpine AS build

# Prepare build image
RUN apk update
RUN apk add gettext python3 make g++

# Receive ARGS
ARG applicationHost
ARG applicationPort
ARG serviceUsersHost
ARG serviceUsersPort

# Prepare build
WORKDIR /build
COPY . .

# Generate configuration based on ENV/ARGS
RUN envsubst < configuration.ts > src/environments/environment.prod.ts
RUN envsubst < nginx.conf > default.conf

# Start build process
RUN npm run docker:install
RUN npm run docker:build

# Generate docker image for production 
FROM nginxinc/nginx-unprivileged:alpine

COPY --from=build /build/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /build/dist/service-movies-ui /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
