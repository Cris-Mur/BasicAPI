# [Application](./index.js)

This Module exports a function thats retrun a prefixed instance of Express application.

Well, this folder contain the space of the application, means contains all code that concern to application

---

### [config](./config/) 
Module that exports a function to handle express parsers and other modules to implement in application.

### [Middlewares](./middlewares/)
Module with global middlewares that affect all aplication.

### [App](./app.js)
Module that exports a prefix Express application.

---

## Express parsers

### [json](./config/_json/)
This module fix application to use a JSON Body parser

### [raw](./config/_raw/)
This Module fix application to use a RAW Express parser

### [Static](./config/_static/)
Module that handle enviroments settings about serve a static FileSystem.

### [text](./config/_text/)
Module that handle enviroments settings about handling request with body in plain text format.

### [urlencoded](./config/_urlencoded/)
Module that handle enviroments settings about handling request with body in urlencoded format

### [locals](./config/_locals/)
Module that handle enviroment to settup variables into application.