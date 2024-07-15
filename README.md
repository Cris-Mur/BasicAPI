# BasicAPI

[![DeepSource](https://app.deepsource.com/gh/Cris-Mur/BasicAPI.svg/?label=active+issues&show_trend=true&token=zS-SGTUGprpijwyk0MQ_TA_G)](https://app.deepsource.com/gh/Cris-Mur/BasicAPI/)

---
"Basic API" is a opinioned implementation of ExpressJS in NodeJS, where we wanted a Application that be a Web Server ready to become in another projects.

For information on how to [contribute](./CONTRIBUTE), if you see any opportunities to enhance this project, please don't hesitate to submit a issue with your proposed changes.

Please refer to the [environment example](./env.example) before running this application.

For developer information, [go here](./src/).

---
## Quick Start

### Requirements and Installation

This app was designed for an X86 machine, recommended use a GNU/Linux machine.

Additionally, this is a NodeJS application. Please ensure that you have installed Nodejs in the latest version of LTS (Long Term Support), in other case you can use the version 20.11

In same way for the Package Manager, like NPM in version 10.4.0 or version LTS

```bash
# First Clone the repo
git clone https://github.com/cris-mur/basicapi.git
cd BasicAPI
# then Install Project dependencies, in this case with npm
npm i
# Copy Environment example in environment file
cat ./env.example > .env
# use npm to start the application
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

in case that you start application without Environment file, the application will use a clean Express implementation.

---
## Run and develop

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
---
<div align="center">
<p>Author <a src=https:github.com/cris-mur>Cristian Murcia</a></p>
<img src="https://avatars.githubusercontent.com/u/28773000" alt="Avatar de GitHub" style="border-radius: 15%;" width="100" height="75"/>
</div>