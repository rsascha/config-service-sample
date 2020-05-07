# This Dockerfile performs a transformation of the MySQL schema
# to OpenAPI. Then a code generation from OpenAPI to ...

FROM alpine

RUN apk update
RUN apk add openjdk11 \
            npm

RUN npm install --global @openapitools/openapi-generator-cli 
                            
WORKDIR /development

ADD http://localhost:3334/swagger-json movies.json

ADD api-generator-calls.sh .
