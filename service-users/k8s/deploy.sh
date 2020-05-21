#!/bin/bash

kubectl -n development delete job service-users-migration

kubectl apply -k manifest-files/development/
