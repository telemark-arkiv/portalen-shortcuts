[![Build Status](https://travis-ci.org/telemark/portalen-shortcuts.svg?branch=master)](https://travis-ci.org/telemark/portalen-shortcuts)
[![Coverage Status](https://coveralls.io/repos/telemark/portalen-shortcuts/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/portalen-shortcuts?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# portalen-shortcuts
Collects shortcuts

## Inbound messages
This microservice consumes the following messages

- ```{cmd: 'collect-shortcuts', type: 'user'}```

## Outbound messages
This microservice does not emit any messages

## Docker
Build the image

```
$ docker build -t portalen-shortcuts .
```

Start

```
$ docker run -d --net host --name portalen-shortcuts portalen-shortcuts
```

From hub.docker.com

```
$ docker run -d --net host --name portalen-shortcuts telemark/portalen-shortcuts
```

Call the service

```
$ curl -d '{"cmd":"collect-shortcuts", "type": "user", "roles": ["administrasjonen", "skole", "tannhelse"]}' -v http://192.168.99.100:8000/act
```