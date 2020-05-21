#!/bin/bash

kubectl delete -k manifest-files/registry \
    && kubectl apply -k manifest-files/registry

