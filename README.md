Free code camp
[request header praser](https://www.freecodecamp.org/challenges/request-header-parser-microservice)
microservice challange.

### Endpoints

## `GET /whoami`

**Description:** Returns parsed headers. It requires
Accept-Language, User-Agent, X-Forwarded-For request headers.

**Example response:**
```JSON
{
  "ipaddress": "192.168.1.1",
  "language": "en-US",
  "software": "Mozilla/5.0 (X11; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```

### Errors


## `404`
```JSON
{
  "status": 404,
  "message": "Page not found"
}
```

## `400`
**Description**:  It appears when the request does not have any of the
required headers (Accept-Language, User-Agent, X-Forwarded-For).

```JSON
{
  "status": 400,
  "message": "Bad request | Missing request header(s)"
}
```

The project builds on the following official docker images:

- [node:6.11-alpine](https://github.com/nodejs/docker-node)
- [nginx:alpine](https://github.com/nginxinc/docker-nginx)

### Dependencies
- [docker](https://docker.com) v17.06
- [docker-compose](https://docs.docker.com/compose) v3.3

### Build docker image
1. `$ cp template.env .env`
Customize `.env` file. For `TIMEZONE` settings see the [alpine documentation](https://wiki.alpinelinux.org/wiki/Alpine_Linux:FAQ#Time_and_timezones)

2. Build the image:
`$ docker build -t [image-name] .`

3. Istall node dependencies:
`$ docker-compose run [--rm] install`


### Development
- development server
`$ docker-compose run [--rm] -p [hos-port]:3000 dev`
visit http://localhost:[host-port]
- shell `$ docker-compose run [--rm] sh`

### Tests
- lint `$ docker-compose run [--rm] lint`
- test `$ docker-compose run [--rm] test`
- coverage `$ docker-compose run [--rm] coverage`
- serve generated coverage
`$ docker-compose run [-d] [--rm] -p [host-port]:80 serve-coverage`
visit http://localhost:[host-port]

### Deploy

The deployment process depends on your server and needs.
[Here](https://egghead.io/lessons/node-js-setup-an-nginx-proxy-for-a-node-js-app-with-docker)
you can find a cool tutorial how to setup an `nginx` proxy for a `Node.js` app.
