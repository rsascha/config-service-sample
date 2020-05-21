
# Run a local Docker Registry

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