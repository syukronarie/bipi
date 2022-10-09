# Bipi: a barebone CRUD GraphQL backend

![BIPI - a barebone CRUD GraphQL backend](https://user-images.githubusercontent.com/36725290/194747168-babfcfc1-2e29-461a-b66c-a4c95ba70b7e.png)


<div align="left">
  <p>
  This is a barebone CRUD GraphQL backend - By <a href="https://www.linkedin.com/in/ariesyukron/">M Arie Syukron</a>
  </p>
  <p>
  See hosted project : <a href="https://bipi-chi.vercel.app/graphql">https://bipi-chi.vercel.app/graphql</a>
  </p>
</div>


## Project Purpose

This is a project barebone CRUD GraphQL backend, the URS here [#1](https://github.com/syukronarie/bipi/issues/1) that the project has already met all the functionality requirements and has one enhancement in [#35](https://github.com/syukronarie/bipi/issues/33).

## Features

* Clean separation between model, service, repo, resolver, and typedef
* HTTP handler is really convenient since it uses `GraphQL`
* Using [`Airbnb](https://github.com/airbnb/javascript) code convention (style guide)
* Extensible
* Minimal dependencies
* No ORM, instead using query builder `Knexjs` (keep it simple)

## Tools

- React v18
- Apollo Server Graphql
- Expressjs
- Knexjs
- PostgreSQL
- Logger (morgan & winston)
- Turbo repo (Monorepo architecture)
- Babel
- Husky
- Eslint
- Commit lint
- [Others library](https://github.com/syukronarie/bipi/blob/master/bipi-svc/package.json)

## See the Code without Clone the repo
- Press `.` 'keyboard shortcut then will bring it into VSCode web

## HOW TO RUN

#### Install all dependency
```bash
npm i
```

### Backend Service
#### Before doing all steps, please change the directory
```bash
cd bipi-svc
```

#### Create the environment first, regarding the schema, please refer to the matrix below

| Environment name                                                                             |Used for                  |
|:--------------------------------------------------------------------------------------------:|:------------------------:|
|[.env.example](https://github.com/syukronarie/bipi/blob/master/bipi-svc/.env.example)         |example schema            |
|[.env.development](https://github.com/syukronarie/bipi/blob/master/bipi-svc/.env.development) |development mode          |
|.env                                                                                          |production mode           |

#### Create table schema using PostgreSQL
- please refer to [pg.sql](https://github.com/syukronarie/bipi/blob/master/bipi-svc/src/config/pg.sql)

#### Run the Backend in Development mode 
```bash
npm run dev
```

#### Build the Backend to run Production mode
```bash
npm run build
```

#### Run in Production mode 
```bash
npm run start
```

## OTHER FEATURE
- GitHub action for CICD [check.yml](./.github/workflows/check.yml)

## TODO
- [ ] Create the Frontend and Integrate it.
