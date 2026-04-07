# Docker — Network & Mongo example

Create a user-defined Docker network and run MongoDB attached to it:

```
docker network create mynetwork

### to connect ot network

docker run -d --name mongo-dev2 -p 27017:27017 -v 
volume_databses:/data/db --network mynetwork mongo

### to connect to network

docker run -d -p 5000:5000 --name my-app --network mynetwork --env-file .env mongo-app

### you can add tag name like
 docker build -t sushilkmrshoo/sushil_docker:v1 .                          

### to push to docker hub create an image with reponame like

docker run --env-file .env sushilkmrshoo/sushil_docker

### for pushing to docker hub

 docker push sushilkmrshoo/sushil_docker                   
```

Notes:

- The `--network mynetwork` flag attaches the container to the user-defined network.
- The volume `volume_databses` persists MongoDB data outside the container.

