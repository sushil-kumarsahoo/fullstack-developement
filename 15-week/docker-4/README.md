# docker-4

Add and run the Docker container:

```
docker run -v ./app:/nextapp/app -p 3000:3000 nextapp
```

This command mounts the local `app` directory into the container at `/nextapp/app` and maps port `3000` from the container to the host.


