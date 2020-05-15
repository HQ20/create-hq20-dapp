# workspace-cache-server

> :herb: This is the cache server workspaces :octocat: All you need in a nut:shell:

This template is a simple express API using a postgresql database. To run this example you need a postgresql database and create the tables. The tables for this example are at *start.sql* file.

In case you want or need to interact with the database, [here](https://wiki.postgresql.org/wiki/PostgreSQL_Clients) is a full list of clients.

This basic example is written is typescript.

## Installation

Use [yarn](https://yarnpkg.com) to install dependencies.

```bash
$ yarn
```

## Usage

### Start a database

To keep everything simple, we recommend you to start  postgresql database, using [docker](https://www.docker.com/). If you already have, follow the instructions [here](https://hub.docker.com/_/postgres) to start a local postgresql database.

It is as simple as
```bash
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

and connect to it with any postgres client (see [here](https://wiki.postgresql.org/wiki/PostgreSQL_Clients)) with the following configurations

```bash
Host: localhost
Port: 5432
Username: postgres
Password: mysecretpassword
```

Before you start, you also need to create the tables. To do so, at the root of this project you can find a *start.sql* file. Depending on the client you are using, either run that file, or copy/paste and execute the commands. It will create the base database and the table. Without this, the cache will not work.

Also, it is necessary to rename the file *.env.example* to *.env* and fill the values.

### All available commands

The package.json file contains a set of npm scripts to help on the development phase. Below is a short description for each
* **"start"** starts the server in dev mode
* **"serve"** runs the compiled code
* **"build"** builds the source code, transforming typescript into optimized javascript
* **"test"** runs tests

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[Apache-2.0](LICENSE)
