# trek-cli

Command line tool for Trek's application.

  [![NPM version][npm-img]][npm-url]
  [![Build status][travis-img]][travis-url]
  [![Test coverage][coveralls-img]][coveralls-url]
  [![License][license-img]][license-url]
  [![Dependency status][david-img]][david-url]

### Usage

```bash
$ trek -h
$ trek new trekapp
$ cd trekapp
$ npm i
$ npm start
```

```bash

  Usage: trek <command> [options]

  Command line tool for Trek's application

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

  Commands:

    generate|g     generate new code
    new|n          create a new Trek application
    server|s       start the Trek server
    console|c      start the Trek console

            _____ ____    _____ _ ___
           /____//__  \  /____//_X__/
            __   ___) / ____  ___
           / /  /   _/ / __/ / _ \
          / /  / /\ \ / /__ / / \ \
         /_/  /_/ /_//____//_/   \_\


```

## Directory Structure

```bash
treek -a trekapp
.
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitattributes
├── .gitignore
├── .travis.yml
├── app
│   ├── controllers
│   │   ├── users.js
│   │   └── welcome.js
│   ├── models
│   │   └── user.js
│   ├── services
│   │   └── .gitkeep
│   └── views
│       └── .gitkeep
├── config
│   ├── .env.development
│   ├── .env.production
│   ├── .env.test
│   ├── app.development.toml
│   ├── app.production.toml
│   ├── app.test.toml
│   ├── app.toml
│   ├── database.toml
│   ├── locales
│   │   └── .gitkeep
│   ├── middleware.js
│   └── routes.js
│   └── secrets.toml
│   └── session.js
├── docker-compose.yml
├── log
│   └── .gitkeep
├── package.json
├── public
│   ├── fonts
│   │   └── .gitkeep
│   ├── humans.txt
│   ├── images
│   │   └── .gitkeep
│   ├── robots.txt
│   ├── scripts
│   │   └── .gitkeep
│   └── styles
│       └── .gitkeep
├── server.js
└── test
    └── .gitkeep
```

## LICENSE

  [MIT](LICENSE)

[npm-img]: https://img.shields.io/npm/v/trek-cli.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trek-cli
[travis-img]: https://img.shields.io/travis/trekjs/trek-cli.svg?style=flat-square
[travis-url]: https://travis-ci.org/trekjs/trek-cli
[coveralls-img]: https://img.shields.io/coveralls/trekjs/trek-cli.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/trekjs/trek-cli?branch=master
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[david-img]: https://img.shields.io/david/trekjs/trek-cli.svg?style=flat-square
[david-url]: https://david-dm.org/trekjs/trek-cli
[license-url]: LICENSE
