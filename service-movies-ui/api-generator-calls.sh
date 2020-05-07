#!/bin/ash

#
# This file is used by Docker
#

openapi-generator generate -g typescript-angular -i movies.json -o api-movies --additional-properties supportsES6=true