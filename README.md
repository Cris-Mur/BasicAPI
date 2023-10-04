# Basic Express Server

---

"Basic API" is a fully managed implementation of ExpressJS that transforms into a NodeJS Application Server, ready to kickstart development in other projects. Please refer to the [environment example](./env.example) before running this application. For development information, [go here](./src/).

For information on how to [contribute](./CONTRIBUTE), please don't hesitate to submit a pull request with your proposed changes in a separate branch if you see any opportunities to enhance this application.

---

## Installation

### Requirements

This app was designed for an X86 machine, preferably using a GNU/Linux OS machine. Additionally, it is a NodeJS application. Please ensure you have the latest LTS version of NodeJS and the latest NPM installed on your machine.

```bash
cd BasicAPI
# Install all dependencies usign npm
npm i
# Settup Env file
cp ./env.example .env
cat .env
# use npm to run app
npm run start
```
### Environment
Primarily, this app can be configured using an environment file to adjust settings such as the behavior of the logger or server settings. For example, the JSON parser can be configured using environment variables.

```Env
### NODE SPACE
NODE_ENV="production" # "development"
#############################################################
### NETWORK SETTINGS
PORT=2700
PORT_DEV=2701
#############################################################
### LOGGER OPTIONS
#VERBOSE=true
#############################################################
##################### EXPRESS FEATURES ######################
### JSON PARSER OPTIONS
JSON=true
JSON_INFLATE=true
JSON_LIMIT=100kb
JSON_STRICT=true
JSON_TYPE=application/json
#############################################################
### RAW PARSER OPTIONS
RAW=true
.
.
.
```

My purpose is to create a 'Shell' code base for other projects. I don't want to reinvent the wheel. This app helps me develop software more easily and securely.

```bash
npm run start

> basic_api@0.1.0 start
> ./src/bin/./init

[ white ][ production  ][ 2023-10-02T16:42:35.054Z ][   log   ]  Application process id: 16353
[ white ][ production  ][ 2023-10-02T16:42:35.057Z ][   log   ]  Listening on port 2700 http://localhost:2700

npm run dev

> basic_api@0.1.0 dev
> npx nodemon ./src/bin/init

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node ./src/bin/init`
[ white ][ development ][ 2023-10-02T16:42:44.075Z ][  debug  ]  [ JSON OPTIONS ] {"inflate":true,"limit":"100kb","strict":true,"type":"application/json","reviver":null}
[ white ][ development ][ 2023-10-02T16:42:44.081Z ][  debug  ]  [ RAW OPTIONS ] {"inflate":true,"limit":"100kb","type":"application/octet-stream"}
[ white ][ development ][ 2023-10-02T16:42:44.082Z ][  debug  ]  [ STATIC OPTIONS ] {"dotfiles":"ignore","etag":true,"extensions":[],"fallthrough":true,"immutable":false,"index":"index.html","lastModified":true,"maxAge":0,"redirect":true}
[ white ][ development ][ 2023-10-02T16:42:44.084Z ][  debug  ]  [ TEXT OPTIONS ] {"defaultCharset":"utf-8","inflate":true,"limit":"100kb","type":"text/plain"}
[ white ][ development ][ 2023-10-02T16:42:44.085Z ][  debug  ]  [ URLENCODED OPTIONS ] {"extended":true,"inflate":true,"limit":"100kb","parameterLimit":100,"type":"application/x-www-form-urlencoded"}
[ white ][ development ][ 2023-10-02T16:42:44.088Z ][  debug  ]  [settings] _json [Function: jsonParser]
[ white ][ development ][ 2023-10-02T16:42:44.091Z ][  debug  ]  [settings] _raw [Function: rawParser]
[ white ][ development ][ 2023-10-02T16:42:44.091Z ][  debug  ]  [settings] _static [Function: serveStatic]
[ white ][ development ][ 2023-10-02T16:42:44.091Z ][  debug  ]  [settings] _text [Function: textParser]
[ white ][ development ][ 2023-10-02T16:42:44.092Z ][  debug  ]  [settings] _urlencoded [Function: urlencodedParser]
[ white ][ development ][ 2023-10-02T16:42:44.092Z ][  debug  ]  [Locals] { KEY: 'VALUE', LOCAL_KEY_STR: 'LOCAL_VALUE_STR' }
[ white ][ development ][ 2023-10-02T16:42:44.097Z ][  debug  ]  [Environment] development
[ white ][ development ][ 2023-10-02T16:42:44.098Z ][  debug  ]  [Application] /
[ white ][ development ][ 2023-10-02T16:42:44.103Z ][   log   ]  Application process id: 16435
[ white ][ development ][ 2023-10-02T16:42:44.103Z ][   log   ]  Listening on port 2701 http://localhost:2701

npm run test
## Not implemented now.
```

---

## Author [Cristian Murcia - Cris-Mur](https:github.com/cris-mur)
