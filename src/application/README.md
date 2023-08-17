# [Application](./index.js)

This Module exports a initialize application, after handling enviroment settings, and settup first chain of middlewares.

## [Middlewares](./middlewares/)

This folder contains all global middlewares that will use for application previous to handle any route.

## [utils](./utils/)

This folder contains helpers function to handle application, and this is a perfect space to implements functions that aren't important but by the way are util functions.

## [App](./app.js)

This Module exports a basic Express application with enviroment settings.
## [config](./config/) 
This folder implements express parsers and create space to implement other setting related with application. 

### [json](./config/_json/)
Module that handle enviroments settings about handling request with body in json format

### [raw](./config/_raw/)
Module that handle enviroments settings about handling request with binary elements.

### [Static](./config/_static/)
Module that handle enviroments settings about serve a static FileSystem.

### [text](./config/_text/)
Module that handle enviroments settings about handling request with body in plain text format.

### [urlencoded](./config/_urlencoded/)
Module that handle enviroments settings about handling request with body in urlencoded format

### [locals](./config/_locals/)
Module that handle enviroment to settup variables into application.