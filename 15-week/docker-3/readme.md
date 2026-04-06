# Docker — Network & Mongo example

Create a user-defined Docker network and run MongoDB attached to it:

```
docker network create mynetwork

docker run -d --name mongo-dev2 -p 27017:27017 -v volume_databses:/data/db --network mynetwork mongo
```

Notes:

- The `--network mynetwork` flag attaches the container to the user-defined network.
- The volume `volume_databses` persists MongoDB data outside the container.

