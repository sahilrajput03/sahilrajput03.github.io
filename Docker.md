https://stackoverflow.com/questions/32047660/docker-for-windows-not-working

```bash
set DOCKER_HOST=tcp://192.168.99.101:2376
##
$ docker-machine regenerate-certs default
Above command works good, if we run it in "Docker Quickstart Terminal" app, and then retrying in kitematic, it runs good.
```

[link this solved it, goodly](https://github.com/docker/kitematic/issues/519)

***

```bash
$ docker build -t node-docker-first .
$ docker run -it -p 9000:3000 node-docker-first
```

```bash
$ docker run -d -p 9000:3000 node-docker-first #this runs in detach mode(background).
$ docker ps #Will show the docker images running in detach mode.
```

```bash
$ docker images
```

