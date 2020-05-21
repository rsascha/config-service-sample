#!/bin/bash

export OLD_VERSION=$(cat version)
VERSION=$(cat version) && ((VERSION=VERSION+1)) && echo $VERSION > version
export VERSION=$VERSION

SOURCE_FILE="templates/deployment.yaml"
TARGET_FILE="manifest-files/deployment.yaml"
echo "# GENERATED FROM: ${SOURCE_FILE}" > $TARGET_FILE
cat $SOURCE_FILE | envsubst >> $TARGET_FILE

IMAGE=localhost:5000/service-users:$VERSION
#cd .. && docker build --tag $IMAGE . && cd -
echo docker tag localhost:5000/service-users:$OLD_VERSION localhost:5000/service-users:$VERSION
docker tag localhost:5000/service-users:$OLD_VERSION localhost:5000/service-users:$VERSION

docker push $IMAGE
