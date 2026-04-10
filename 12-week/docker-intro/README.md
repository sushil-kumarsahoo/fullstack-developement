# Docker: PostgreSQL Quick Start

Start a PostgreSQL container (replace `yourpassword`):

```bash
docker run -e POSTGRES_PASSWORD=yourpassword -d -p 5432:5432 -v mypostgresdata:/var/lib/postgresql/data postgres
```

Open a psql shell inside the running container (use `docker ps` to get the container id):

```bash
docker exec -it <container_id> psql -U postgres
```

Useful Docker commands:

```bash
# Show running containers
docker ps

# Show all containers (including stopped)
docker ps -a

# Stop a container
docker stop <container_id>

# Open a bash shell inside a container
docker exec -it <container_id> /bin/bash

# Enter into postgres 
psql -h localhost -d postgres -U postgres
then you create databses
```


Notes:
- The `-v mypostgresdata:/var/lib/postgresql/data` flag creates a named volume so your DB persists.
- Replace `<container_id>` with the ID or name from `docker ps`.

