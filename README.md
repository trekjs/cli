# trek-cli

### Usage

```

  Usage: trek <command> [options]

  Command line tool for Trek's application

  Options:

    -h, --help     output usage information
    -V, --version  output the version number

  Commands:

    generate                generate new code
    new                     create a new Trek application
    server                  start the Trek server
    console                 start the Trek console

            _____ ____    _____ _ ___
           /____//__  \  /____//_X__/
            __   ___) / ____  ___
           / /  /   _/ / __/ / _ \
          / /  / /\ \ / /__ / / \ \
         /_/  /_/ /_//____//_/   \_\

```

## Directory Structure

```
trekapp
├── .babelrc
├── .editorconfig
├── .env
├── .env.development
├── .env.production
├── .env.test
├── .gitattributes
├── .gitignore
├── .jshintrc
├── .travis.yml
├── app
│   ├── controllers
│   │   └── users.js
│   ├── models
│   │   └── user.js
│   ├── services
│   └── views
├── config
│   ├── application.js
│   ├── environments
│   │   ├── development.js
│   │   ├── production.js
│   │   └── test.js
│   ├── locales
│   ├── passport.js
│   ├── routes.js
│   └── session.js
├── log
│   └── .gitkeep
├── package.json
├── public
├── server.js
└── test
```

## LICENSE

  [MIT](LICENSE)
