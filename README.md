# Basic Express Server

[![DeepSource](https://app.deepsource.com/gh/Cris-Mur/BasicAPI.svg/?label=active+issues&show_trend=true&token=zS-SGTUGprpijwyk0MQ_TA_G)](https://app.deepsource.com/gh/Cris-Mur/BasicAPI/)

---
"Basic API" is a fully managed implementation of ExpressJS that makes NodeJS Application into a Useful Web Server, now this application are ready to kick start development in other projects. Please refer to the [environment example](./env.example) before running this application. For development information, [go here](./src/).

For information on how to [contribute](./CONTRIBUTE), please don't hesitate to submit a pull request with your proposed changes in a separate branch if you see any opportunities to enhance this application.

---
## Installation

### Requirements

This app was designed for an X86 machine, preferably using a GNU/Linux OS machine. Additionally, it is a NodeJS application. Please ensure that you have the latest LTS or (v20.11.0) of NodeJS and the latest NPM or (v10.4.0) installed on your machine.

```bash
cd BasicAPI
# Install all dependencies usign npm
npm i
# Settup Env file
cat ./env.example > .env
# use npm to run app
npm run start
```
### Environment
Primarily, this app can be configured using an environment file to adjust settings such as the behavior of the logger or server settings. For example, the JSON parser can be configured using environment variables.

```Env
### NODE SPACE
# NODE_ENV="production" # "development"
#############################################################
### LOGGER OPTIONS
# LOGGER=true
# VERBOSE=true
# COLORED=true
#############################################################
##################### HOMEBREW FEATURES #####################
#############################################################
### Inspector
# INSPECTOR=true
#############################################################
### Error 404 & 5XX Handlers
# ERRORS_HANDLERS=true
### NETWORK SETTINGS
# SERVERLESS=true
# RESILIENT_PORT=true
# PORT=2700
# PORT_DEV=2701
#############################################################
##################### EXPRESS FEATURES ######################
#BUILD_IN_FEATURES=true
# DISSABLE_POWERED_BY=true
#############################################################
### JSON PARSER OPTIONS
# JSON=true
.
.
.
```

My purpose is create a 'Shell', one code base for other projects. I don't want to reinvent the wheel. This app helps me develop software more easily and securely.

```bash
$ npm run start

> basic_api@0.1.31 start  
> ./src/bin/init  
  
  
▄▄▄▄    ▄▄▄        ██████  ██▓ ▄████▄      ▄▄▄       ██▓███   ██▓  
▓█████▄ ▒████▄    ▒██    ▒ ▓██▒▒██▀ ▀█     ▒████▄    ▓██░  ██▒▓██▒  
▒██▒ ▄██▒██  ▀█▄  ░ ▓██▄   ▒██▒▒▓█    ▄    ▒██  ▀█▄  ▓██░ ██▓▒▒██▒  
▒██░█▀  ░██▄▄▄▄██   ▒   ██▒░██░▒▓▓▄ ▄██▒   ░██▄▄▄▄██ ▒██▄█▓▒ ▒░██░  
░▓█  ▀█▓ ▓█   ▓██▒▒██████▒▒░██░▒ ▓███▀ ░    ▓█   ▓██▒▒██▒ ░  ░░██░  
░▒▓███▀▒ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░░▓  ░ ░▒ ▒  ░    ▒▒   ▓▒█░▒▓▒░ ░  ░░▓     
▒░▒   ░   ▒   ▒▒ ░░ ░▒  ░ ░ ▒ ░  ░  ▒        ▒   ▒▒ ░░▒ ░      ▒ ░  
░    ░   ░   ▒   ░  ░  ░   ▒ ░░             ░   ▒   ░░        ▒ ░  
░            ░  ░      ░   ░  ░ ░               ░  ░          ░     
     ░                        ░                                     
  
[ white ][ development ][ 2024-03-02T00:08:24.735Z ][   log   ]    
Startup: 62.125ms  
[ white ][ development ][ 2024-03-02T00:08:24.738Z ][   log   ]    
Application process id: 11803  
[ white ][ development ][ 2024-03-02T00:08:24.738Z ][   log   ]    
Listening on port 33047  
  
       http://localhost:33047  
  
       http://white:33047


-----------


$ npm run dev

> basic_api@0.1.31 dev  
> npx nodemon ./src/bin/init  
  
[nodemon] 3.1.0  
[nodemon] to restart at any time, enter `rs`  
[nodemon] watching path(s): *.*  
[nodemon] watching extensions: js,mjs,cjs,json  
[nodemon] starting `node ./src/bin/init`  
  
▄▄▄▄    ▄▄▄        ██████  ██▓ ▄████▄      ▄▄▄       ██▓███   ██▓  
▓█████▄ ▒████▄    ▒██    ▒ ▓██▒▒██▀ ▀█     ▒████▄    ▓██░  ██▒▓██▒  
▒██▒ ▄██▒██  ▀█▄  ░ ▓██▄   ▒██▒▒▓█    ▄    ▒██  ▀█▄  ▓██░ ██▓▒▒██▒  
▒██░█▀  ░██▄▄▄▄██   ▒   ██▒░██░▒▓▓▄ ▄██▒   ░██▄▄▄▄██ ▒██▄█▓▒ ▒░██░  
░▓█  ▀█▓ ▓█   ▓██▒▒██████▒▒░██░▒ ▓███▀ ░    ▓█   ▓██▒▒██▒ ░  ░░██░  
░▒▓███▀▒ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░░▓  ░ ░▒ ▒  ░    ▒▒   ▓▒█░▒▓▒░ ░  ░░▓     
▒░▒   ░   ▒   ▒▒ ░░ ░▒  ░ ░ ▒ ░  ░  ▒        ▒   ▒▒ ░░▒ ░      ▒ ░  
░    ░   ░   ▒   ░  ░  ░   ▒ ░░             ░   ▒   ░░        ▒ ░  
░            ░  ░      ░   ░  ░ ░               ░  ░          ░     
     ░                        ░                                     
  
[ white ][ development ][ 2024-03-02T00:10:10.299Z ][  debug  ]    
[ JSON OPTIONS ] {"inflate":false,"limit":"100kb","strict":false,"type":"application/json","reviver":null}  
[ white ][ development ][ 2024-03-02T00:10:10.414Z ][  debug  ]    
StartUp Application  
[ white ][ development ][ 2024-03-02T00:10:10.415Z ][  debug  ]    
[locals vars] {}  
[ white ][ development ][ 2024-03-02T00:10:10.417Z ][  debug  ]    
[Swagger mount] /api  
[ white ][ development ][ 2024-03-02T00:10:10.462Z ][  debug  ]    
[middlewares to load] {  
 _json: [Function: jsonParser],  
 _raw: undefined,  
 _static: [Function: serveStatic],  
 _text: undefined,  
 _urlencoded: undefined,  
 _cors: undefined  
}  
[ white ][ development ][ 2024-03-02T00:10:10.463Z ][  debug  ]    
[loading middleware] _json [Function: jsonParser]  
[ white ][ development ][ 2024-03-02T00:10:10.464Z ][  debug  ]    
[loading middleware] _static [Function: serveStatic]  
[ white ][ development ][ 2024-03-02T00:10:10.464Z ][  debug  ]    
[_static middleware path] /  
[ white ][ development ][ 2024-03-02T00:10:10.467Z ][  debug  ]    
[one instance of application ready]  
[ white ][ development ][ 2024-03-02T00:10:10.467Z ][  debug  ]    
[End of StartUp application ready]  
[ white ][ development ][ 2024-03-02T00:10:10.468Z ][   log   ]    
Startup: 53.054ms  
[ white ][ development ][ 2024-03-02T00:10:10.469Z ][   log   ]    
Application process id: 11962  
[ white ][ development ][ 2024-03-02T00:10:10.469Z ][   log   ]    
Listening on port 6661  
  
       http://localhost:6661  
  
       http://white:6661
```

---

<div align="center">
<p>Author <a src=https:github.com/cris-mur>Cristian Murcia</a></p>
<img src="https://avatars.githubusercontent.com/u/28773000" alt="Avatar de GitHub" style="border-radius: 15%;" width="100" height="75"/>
</div>
