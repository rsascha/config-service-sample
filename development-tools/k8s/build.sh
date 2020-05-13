#!/bin/bash

VERSION=$(cat version) && ((VERSION=VERSION+1)) && echo $VERSION > version
export VERSION=$VERSION

SOURCE_FILE="templates/deployment.yaml"
TARGET_FILE="manifest-files/deployment.yaml"
echo "# GENERATED FROM: ${SOURCE_FILE}" > $TARGET_FILE
cat $SOURCE_FILE | envsubst >> $TARGET_FILE

SOURCE_FILE="templates/index.html"
TARGET_FILE="../src/index.html"
echo "<!-- GENERATED FROM: ${SOURCE_FILE} -->" > $TARGET_FILE
cat $SOURCE_FILE | envsubst >> $TARGET_FILE

IMAGE=localhost:5000/development-tools:$VERSION
cd .. && docker build --tag $IMAGE . && cd -

docker push $IMAGE
