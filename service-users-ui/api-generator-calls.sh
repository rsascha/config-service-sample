#!/bin/ash

#
# This file is used by Docker
#

openapi-generator generate -g typescript-angular -i users.json -o api-users --additional-properties supportsES6=true