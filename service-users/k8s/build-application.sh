#!/bin/bash

DOCKERFILE="dev.Dockerfile"

export VERSION=$(cat version)

SOURCE_FILE="templates/deployment.yaml"
TARGET_FILE="manifest-files/base/deployment.yaml"
echo "# GENERATED FROM: ${SOURCE_FILE}" > $TARGET_FILE
cat $SOURCE_FILE | envsubst >> $TARGET_FILE

IMAGE=localhost/service-users:$VERSION
docker build -f ../$DOCKERFILE --tag $IMAGE ..
docker push $IMAGE
