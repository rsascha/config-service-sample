#!/bin/bash

export OLD_VERSION=$(cat version)
VERSION=$(cat version) && ((VERSION=VERSION+1)) && echo $VERSION > version
export VERSION=$VERSION

SOURCE_FILE="templates/deployment.yaml"
TARGET_FILE="manifest-files/base/deployment.yaml"
echo "# GENERATED FROM: ${SOURCE_FILE}" > $TARGET_FILE
cat $SOURCE_FILE | envsubst >> $TARGET_FILE

IMAGE=localhost:5000/service-movies-ui:$VERSION
cd .. && docker build \
    --build-arg applicationHost=service-movies-ui \
    --build-arg applicationPort=8081 \
    --build-arg serviceMoviesHost=service-movies \
    --build-arg serviceMoviesPort=3334 \
    --tag $IMAGE . && cd -

# echo docker tag localhost:5000/service-movies-ui:$OLD_VERSION $IMAGE
# docker tag localhost:5000/service-movies-ui:$OLD_VERSION $IMAGE

docker push $IMAGE
