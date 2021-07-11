# NAB NestJs Micro-Services

This is a template code for Micro Services base on [NestJs](https://nestjs.com/) framework

## About the Project
**ICommerce** is online shopping application.

Project is a e-commerce service includes:
- Core Service
- Product Service
- Customer Service
- ...

## Index
- [Installation](##installation)
- [Architecture](##architecture)
- [Source Code Structure](#source-code-structure)
- [Run Project](#run-project)
- [DB Admin Page](##db-admin-page)
- [Workflows](##workflows)
- [Notes](##notes)
- [P.S](##ps)
- .


## Installation
### NodeJs
Use [NodeJs](https://nodejs.org/) version v12.18.3 or uper version.

```
node --version
v12.18.3
```
Use the package manager [Yarn](https://yarnpkg.com/) version 1.22.4 or uper version.

```bash
yarn --version
1.22.4
```

### Docker and Docker Compose
Use [Docker](https://www.docker.com/) version 20.10.5 and [Docker Compose](https://www.docker.com/) version 1.28.5

```bash
docker --version
Docker version 20.10.5, build 55c4c88

docker-compose --version
docker-compose version 1.28.5, build c4eb3a1f
```

### MySQL 
Use [MySQL](https://hub.docker.com/_/mysql), docker image latest version

## Architecture
The [Architecture](/docs/ARCHITECTURE.md##Architecture) design in here.

## Source Code Structure

```
root
|-- docs
    |-- images
    |-- ARCHITECTURE.md
|-- docker-compose
    |-- docker-compose.yaml
|-- migrations
    |-- init.sql
|-- nab-core-service
    |-- ...
|-- nab-customer-service
    |-- ...
|-- nab-product-service
    |-- ...
```

- The **nab-core-service** is core base.
- The **nab-customer-service** is customer service.
- The **nab-product-service** is product service.

## Run Project

```bash
cd docker-compose
docker-compose up
```
Project will automatic run base on docker enviroments

## DB Admin Page
[Admin Page](http://localhost:8080/)

Note: [Run](##Run-Project) project first.

```
Server: mysql-db:3306
Username: root
Password: admin
Database: nab-customer-service || nab-product-service
```

## Workflows
[Use Case](/docs/ARCHITECTURE.md##Use-Case) - [Sequence Diagram](/docs/ARCHITECTURE.md##Sequence-Diagram)

Note: [Run](##Run-Project) project first.

### [Follow Searching/Viewing list products]()
```curl
curl --location --request POST 'localhost:3000/products/search' \
--header 'Authorization: 8ea031c8-3d2e-4996-85dc-d3dff57token' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Joy",
    "orderBy": "price",
    "orderType": "DESC",
    "limit": 10,
    "page": 0
}'
```
### [Follow Viewing detail products]()
```curl
curl --location --request GET 'localhost:3000/products/product_3f210ca5-ae38-4e5f-8353-f86eaba1b98c' \
--header 'Authorization: 8ea031c8-3d2e-4996-85dc-d3dff57token'
```

## Notes
The **Authentication/Authorization** are not implemented, these trust mock data ([Link](/nab-core-service/src/mocks/auth-data.json)).

## P.S
Thanks for watching.







