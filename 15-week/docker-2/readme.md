
# MongoDB (Docker) — Quick Commands

This file documents common Docker + MongoDB commands used during development.

## Create & run

Create a persistent Docker volume for MongoDB data:

```
docker volume create mongo-data
```

Run a MongoDB container using the `mongo-data` volume and map host port `27018` to container port `27017`:

```
docker run -d --name mongo-dev -p 27018:27017 -v mongo-data:/data/db mongo
```

Start, stop and remove the container:

```
docker start mongo-dev
docker stop mongo-dev
docker rm mongo-dev
```

List containers and volumes:

```
docker ps          # running containers
docker ps -a       # all containers (including stopped)
docker volume ls   # all volumes
docker volume rm mongo-data  # delete volume
```

View container logs:

```
docker logs mongo-dev
```

## Way 1 — mongosh (Human readable)

Open a MongoDB shell inside the running container:

```
docker exec -it mongo-dev mongosh
```

Inside `mongosh` you can run the following commands:

```
show dbs
use mydb
show collections
db.users.find()
db["my-collection"].find()
db.users.insertOne({ name: "Sushil", email: "sushil@gmail.com" })
db.users.deleteOne({ name: "Sushil" })
exit
```

## Way 2 — Raw file system (inspect DB files)

Open a bash shell in the container and inspect the data directory:

```
docker exec -it mongo-dev /bin/bash
cd /data/db
ls
ls -lh    # sizes
exit
```

## Notes

- The MongoDB server inside the container listens on port `27017`. We map that to `27018` on the host in the example above so the host's `27017` remains free.
- Data persisted to the `mongo-data` volume survives container removal.

