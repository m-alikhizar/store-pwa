# Store [WIP]

[![CircleCI](https://circleci.com/gh/khizar-ali/Store.svg?style=svg)](https://circleci.com/gh/khizar-ali/Store)

## Run the application using Docker
1. [Build the image](#1-build-the-image)
2. [Run the image](#2-run-the-image)

## Prerequisites:
1. [Create Docker account](https://cloud.docker.com/)
 
2. [Install Docker CLI](https://docs.docker.com/install/)

3. [Retrieve and save your Docker user id](https://cloud.docker.com/)

### 1. Build the image

In a terminal, run:
```
$ docker build -t $docker_username/Store .
```

Your image should be listed by running:

```
$ docker images
```

### 2. Run the image

In a terminal, run:

```
$ docker run -p 3000:3000 -d $docker_username/Store
```

You can now access the application at http://localhost:8090
