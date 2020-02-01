### Payment Service Provider (PSP)

Nodejs application developed using clean architecture with Typescript for a basic PSP


#### Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

#### Prerequisites

- Docker and docker-compose
    - https://docs.docker.com/compose/install/ 

#### Installing

- First, run docker-compose to create local images to improve docker performance

```
$ docker-compose -f docker-compose-images.yaml up --build
```

- As second and last step, just run your development environment

```
$ docker-compose up
```

#### Deployment

- It isn't necessary yet!