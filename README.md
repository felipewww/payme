# Payment Service Provider (PSP)

Nodejs application developed using clean architecture with Typescript for a basic PSP


### Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Docker and docker-compose
    - https://docs.docker.com/compose/install/   

### Installing

- First, run docker-compose to create local images to improve docker performance

```
$ docker-compose -f docker-compose-images.yaml up --build
```

- Then, just run your development environment

```
$ docker-compose up
```

- If run's by the first time, you will need to run Seeder and Migrations
```
# access app container
$ docker exec -it payme-api bash

# run migrations
$ knex:migrate:latest

# run seeder
$ knex seed:run
```

#### Endpoints
- All endpoints can be found within "main/routes.ts" and have no documentation yet, here is a resume of endpoints.
- As api container running inside docker, you should call on mapped port described on docker-compose.yaml file (http://localhost:30001)

##### making a transaction
- /api/v1/transaction

body {
	"value": 100.00,
	"description": "TBrand XYZ",
	"paymentMethod": "debit_card",
	"cardNumber": "9652378452364589",
	"payerName": "Jane Doe",
	"cardDueDate": "01/2020",
	"CVV": 562,
	"clientID": 1
}

#### Deployment

- It isn't necessary yet!