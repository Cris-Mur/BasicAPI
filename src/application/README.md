# [Application](./index.js)

The "Application" module have the responsibility all concern to behavior
of express related, and exports a fabric of "Application".

now, the root folder have one module with purpose is collect objects expressJS compatibles this folder is called [Middlewares](./middlewares), and export a object with middleware like attributes.

[Config](./config) module exports "setup" functionality that's manage injection Express features into an ExpressJS application instance.

and [Utils](./utils) module exports a toolkit of the application, for example
logger.

---

Think in this module like a box that have one wire to connect a handy application.

---

## Express Features

### [json](./config/_json/index.js)
This module fix application to use a JSON Body parser
### [raw](./config/_raw/index.js)
This Module fix application to use a RAW Express parser
### [Static](./config/_static/index.js)
Module that handle environments settings about serve a static FileSystem.
### [text](./config/_text/index.js)
Module that handle environments settings about handling request with body in plain text format.
### [urlencoded](./config/_urlencoded/index.js)
Module that handle environments settings about handling request with body in urlencoded format
### [locals](./config/_locals/index.js)
Module that handle environment to setup variables into application.

### [CORS](./)
Module that exports a cors middleware with handle request and set cors policy

---

# Required Middlewares

## [404](./middlewares/cannot_get/index.js)
This Middleware catch all request that aren't managed for the router of application.

## [5XX](./middlewares/error_handler/index.js)
This middleware catch errors on endpoint middlewares.

## [Inspector](./middlewares/inspector/index.js)
This middleware catch all request and inject performace mesure object, and prints pretty log of input request