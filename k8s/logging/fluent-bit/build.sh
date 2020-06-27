#!/bin/bash

kustomize build manifest-files/development/ --output fluent-bit.yaml

cat fluent-bit.yaml