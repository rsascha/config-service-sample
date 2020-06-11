#!/bin/bash

#
# https://kind.sigs.k8s.io/docs/user/quick-start/
#

curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.8.1/kind-$(uname)-amd64
chmod +x ./kind
mv ./kind /usr/local/bin/
