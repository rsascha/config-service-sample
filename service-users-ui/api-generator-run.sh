#!/bin/bash

docker build --tag=api-generator --file=api-generator.Dockerfile .
docker run -it -v $(pwd)/src/api-users:/development/api-users api-generator ./api-generator-calls.sh
