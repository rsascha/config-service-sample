#!/bin/bash

VERSION=$(cat version) && ((VERSION=VERSION+1)) && echo $VERSION > version
