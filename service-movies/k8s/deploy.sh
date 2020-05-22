#!/bin/bash

kubectl -n development delete job service-movies-migration

kubectl apply -k manifest-files/development/
