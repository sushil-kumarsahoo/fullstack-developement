# run redis inside docker
```
docker run --name name -d -p 6379:6379 redis
```
### enter into redis cli
```
docker exec -it /bin/bash
redis-cli

```
# set tracks in redis or insert values
```
SET tracks "[{title: 'typescript', description:''}]"

GET tracks

HSET user:100 name "john doe" email "user@gmail.com" age "30"

HGET user:100 name

SET tracks:100 "[{title: 'typescript', description:''}]"
```