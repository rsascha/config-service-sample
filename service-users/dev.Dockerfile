# Generate docker image for development test
FROM node:lts-alpine
WORKDIR /application
COPY ./dist .
COPY ./node_modules ./node_modules
EXPOSE 3333
ENTRYPOINT ["node", "main"]
