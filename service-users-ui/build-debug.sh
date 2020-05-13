#!/bin/bash

docker build \
    --build-arg serviceUsersHost=localhost \
    --build-arg serviceUsersPort=4200 \
    --build-arg applicationHost=localhost \
    --build-arg applicationPort=4200 \
    .
