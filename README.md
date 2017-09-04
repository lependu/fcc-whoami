Free code camp
[request header praser](https://www.freecodecamp.org/challenges/request-header-parser-microservice)
microservice challange.

### Endpoints

## `GET /whoami`

**Description:** Returns parsed headers. It requires
Accept-Language, User-Agent, X-Forwarded-For request headers to be set.
If request header(s) is not defined, it returns `null`.

**Example response:**
```JSON
{
  "ipaddress": "192.168.1.1",
  "language": "en-US",
  "software": "X11; Linux x86_64; rv:50.0"
}
```

### Errors

## `404`
```JSON
{
  "message": "Not Found",
}
```

### Development
- development server with nodemon
`$ npm run dev`
visit http://localhost:3000

### Tests
- lint `$ npm run lint`
- test `$ npm run test`
- coverage `$ npm run coverage`

### Deployment
The deployment process depends on your server and needs.
[Here](https://egghead.io/lessons/node-js-setup-an-nginx-proxy-for-a-node-js-app-with-docker)
you can find a cool tutorial how to setup an `nginx` proxy for a `Node.js` app.
