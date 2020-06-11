#!/bin/bash

export VERSION=$(cat version)

SOURCE_FILE="templates/job.yaml"
TARGET_FILE="manifest-files/base/job.yaml"
echo "# GENERATED FROM: ${SOURCE_FILE}" > $TARGET_FILE
cat $SOURCE_FILE | envsubst >> $TARGET_FILE

IMAGE=localhost/service-users-migration:$VERSION
docker build -f ../migration.Dockerfile --tag $IMAGE ..
docker push $IMAGE
