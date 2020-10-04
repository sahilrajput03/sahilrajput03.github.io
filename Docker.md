https://stackoverflow.com/questions/32047660/docker-for-windows-not-working

```bash
set DOCKER_HOST=tcp://192.168.99.101:2376
##
$ docker-machine regenerate-certs default
Above command works good, if we run it in "Docker Quickstart Terminal" app, and then retrying in kitematic, it runs good.
```

[link this solved it, goodly](https://github.com/docker/kitematic/issues/519)

***

After you build an image with the docker build command, you can view it via - 

```bash
$ docker images
```

So, how to build and run one?

```bash
$ docker build -t node-docker-first .
$ docker run -it -p 9000:3000 node-docker-first
```

(-it stands for interactive terminal). (The `-p` flag redirects a public port to a private port inside the container)

```bash
$ docker run -d -p 9000:3000 node-docker-first # Runs in detach mode(background).
$ docker ps # Will show the docker images running in detach mode, with respective port on which they are running.
$ docker logs <container id> # Print app output.
$ docker exec -it <container id> /bin/bash # To go inside the container.

```

```bash
$ docker images
```

