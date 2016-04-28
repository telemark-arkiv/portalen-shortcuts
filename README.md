# portalen-shortcuts
Collects shortcuts

## Inbound messages
This microservice listens for the following messages

- ```{cmd: 'collect-shortcuts', type: 'user'}```

## Outbound messages
This microservice does not emit any messages

- ```{info: 'tasks', type:'user'}```

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