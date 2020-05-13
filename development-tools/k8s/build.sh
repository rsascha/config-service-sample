#!/bin/bash

VERSION=$(cat version) && ((VERSION=VERSION+1)) && echo $VERSION > version
IMAGE=localhost:5000/development-tools:$VERSION

cd .. && docker build --tag $IMAGE . && cd -

docker push $IMAGE

export VERSION=$VERSION
envsubst < templates/deployment.yaml > manifest-files/deployment.yaml
