#!/bin/bash

export OLD_VERSION=$(cat version)
VERSION=$(cat version) && ((VERSION=VERSION+1)) && echo $VERSION > version
export VERSION=$VERSION

SOURCE_FILE="templates/deployment.yaml"
TARGET_FILE="manifest-files/base/deployment.yaml"
echo "# GENERATED FROM: ${SOURCE_FILE}" > $TARGET_FILE
cat $SOURCE_FILE | envsubst >> $TARGET_FILE

IMAGE=localhost:5000/service-users-ui:$VERSION
cd .. && docker build \
    --build-arg applicationHost=service-users-ui \
    --build-arg applicationPort=8080 \
    --build-arg serviceUsersHost=service-users \
    --build-arg serviceUsersPort=3333 \
    --tag $IMAGE . && cd -
    
# echo docker tag localhost:5000/service-users-ui:$OLD_VERSION $IMAGE
# docker tag localhost:5000/service-users-ui:$OLD_VERSION $IMAGE

docker push $IMAGE

