
# Run a local Docker Registry

# SSL (not working)

The idea ...

```yaml
registry:
  restart: always
  image: registry:2
  ports:
    - 5000:5000
  environment:
    REGISTRY_HTTP_TLS_CERTIFICATE: /cert/server.crt
    REGISTRY_HTTP_TLS_KEY: /cert/server.key
    REGISTRY_AUTH: htpasswd
    REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd
    REGISTRY_AUTH_HTPASSWD_REALM: Registry Realm
  volumes:
    - ~/.registry/data:/var/lib/registry
    - ~/.registry/cert:/cert
    - ~/.registry/auth:/auth
```

```bash 

# Setup
mkdir -p ~/.registry/auth
mkdir -p ~/.registry/data
mkdir -p ~/.registry/cert

docker run --entrypoint htpasswd registry:2 -Bbn admin <your-new-password> >> ~/.registry/auth/htpasswd

openssl genrsa -out ~/.registry/cert/server.key 2048
openssl rsa -in ~/.registry/cert/server.key -out ~/.registry/cert/server.key
openssl req -sha256 -new -key ~/.registry/cert/server.key -out ~/.registry/cert/server.csr -subj '/CN=localhost'
openssl x509 -req -sha256 -days 365 -in ~/.registry/cert/server.csr -signkey ~/.registry/cert/server.key -out ~/.registry/cert/server.crt

# Start
docker-compose up -d

# Test
docker pull alpine
docker login -u admin localhost:5000 # Enter <your-new-password>
docker tag alpine localhost:5000/alpine
docker push localhost:5000/alpine
```
