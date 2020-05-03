#!/bin/bash

sudo rm -rf $(pwd)/src/api-movies
docker build --tag=api-generator --file=api-generator.Dockerfile .
docker run -it -v $(pwd)/src/api-movies:/development/api-movies api-generator ./api-generator-calls.sh
