#!/bin/bash

openssl req -x509 -nodes -new -sha256 -days 1024 -newkey rsa:2048 -keyout ./certs/localhost.key -out ./certs/localhost.pem -subj "/C=US/CN=Example-Root-CA"
openssl x509 -outform pem -in ./certs/localhost.pem -out ./certs/localhost.crt
