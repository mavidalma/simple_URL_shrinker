# simple_URL_shrinker

In order to run this service you need to have a MongoDB service running.

To launch it, simply clone the repo and install de dependencies:

```shell
npm i
```
You will need to set up a .env file with the MongoDB URI, the PORT from which serve the application and the URL domain to build de shortened URLs with. You can use the default values as shown on .example.env

you can reset and/or initiliaze de DB running the command

```shell
npm run db_init
```

for development purpouses you can use 

```shell
npm run dev
```

## Endpoints

To shorten an URL you just need to pass it to

```shell
POST /short
```
Body 
```json
{
  "url": "value",
}
```

it will response with

```json
{
    "success": true,
    "url": "<<shortened url>>"
}
```

when accessing the url, it will automatically redirect to the URL provided.