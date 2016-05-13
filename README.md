[![Build Status](https://travis-ci.org/telemark/portalen-shortcuts.svg?branch=master)](https://travis-ci.org/telemark/portalen-shortcuts)
[![Coverage Status](https://coveralls.io/repos/telemark/portalen-shortcuts/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/portalen-shortcuts?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# portalen-shortcuts
Collects shortcuts

## Configuration

### PORTALEN_SHORTCUTS_TAG
Tag for the microservice. Defaults to ```portalen-shortcuts```

### PORTALEN_SHORTCUTS_URL
Actually not in use. Defaults to ```https://portalen.shortcuts.no```

### PORTALEN_SHORTCUTS_ISOLATED
Use this to run this service in isolated mode.

### PORTALEN_SHORTCUTS_HOST
Host for this service if run in isolated mode. Defaults to ```localhost```

### PORTALEN_SHORTCUTS_PORT
PORT for this service if run in isolated mode. Defaults to ```8000```

## Messages handled

### ```cmd: 'collect-shortcuts', type: 'user'```

Returns a list if a users shortcuts based on roles, groups.

```seneca.act({cmd: 'collect-shortcuts', type:'user', user:user, roles:[roles]}, (error, data) => {})```

```curl -d '{"cmd": "collect-shortcuts", "type":"user", "user":"gasg", "roles": ["alle", "administrasjonen"]}' -v http://localhost:8000/act```

Returns

```
[
  {
    title: "Min side",
    description: "Ferier, fravær og reiseregninger",
    system: "visma",
    url: "http://tfk-fh-visma01:8200/enterprise",
    icon: "assessment"
  },
  {
    title: "Compilo",
    description: "Kvalitets og avvikssystem",
    system: "compilo",
    url: "https://kvalitetslosen.t-fk.no/",
    icon: "timeline"
  },
  {
    title: "Læring",
    description: "Oversikt over interne kurs og elektronisk opplæringsmateriell",
    system: "Sharepoint",
    url: "https://rom.t-fk.no/laering/Sider/default.aspx",
    icon: "school"
  },
  {
    title: "Servicetorget",
    description: "Servicetorg for IT, arkiv mm.",
    system: "CS",
    url: "https://rom.t-fk.no/laering/Sider/default.aspx",
    icon: "contact_mail"
  },
...
...
```

## Messages emitted
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