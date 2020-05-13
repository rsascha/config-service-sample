#!/bin/bash

docker build \
    --build-arg serviceMoviesHost=localhost \
    --build-arg serviceMoviesPort=4200 \
    --build-arg applicationHost=localhost \
    --build-arg applicationPort=4200 \
    .
