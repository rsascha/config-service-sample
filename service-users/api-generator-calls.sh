#!/bin/ash

#
# This file is used by Docker
#

openapi-generator generate -g typescript-node -i movies.json -o api-movies --additional-properties supportsES6=true