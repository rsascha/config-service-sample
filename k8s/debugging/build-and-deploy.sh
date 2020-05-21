#!/bin/bash

VERSION=$(cat version) && ((VERSION=VERSION+1)) && echo $VERSION > version
export VERSION=$VERSION

SOURCE_FILE="templates/pod.yaml"
TARGET_FILE="manifest-files/base/pod.yaml"
echo "# GENERATED FROM: ${SOURCE_FILE}" > $TARGET_FILE
cat $SOURCE_FILE | envsubst >> $TARGET_FILE

IMAGE=localhost:5000/debugger:$VERSION
docker build --tag $IMAGE .

docker push $IMAGE

kubectl apply -k manifest-files/development/
