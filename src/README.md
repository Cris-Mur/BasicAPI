# Fully ExpressJS Setable Application

ExpressJS is a Framework to handle http request in a node server App.
This application porpouse a architecture, structure and tool kit developed for 
this project.

The main idea is resolve all general needs of "WEB API", for example parse JSON
request, or generate usable way to traking behaivor, in many projects i made
identical things to do same thing, this already do and my idea is maintain
secure, ligth, simple, and forkable.

## Conventions

All code are writed in CommonJS for the convenience modular architecture and I
think that good code is easyly become ESModule, if in a future NodeJS improove
ESLANG features, i will change the modules to ESLang.

All code, function, modules and scirpts will be respeat below code structure.

for Example:

```JavaScript
const import_module = require('...');

/**
 * @Async nameOfFunction
 * @description - Descriptive message about
 * function, how works in simple words.
 * @param name_of_param <type> - Description
 * @return <type>
 */
async function nameOfFunction (name_of_param) {
    // The functions should do only one thing and be as specific as possible.
    
    // try to use isolated error handling.
    try {
        // code of function.
    } catch (error_) {
        console.error('[Error on function]', error_);
    }
}
```

I think that types are important but TS, in my opinion is more than only hard
types.

JSDocs is a good helper with ESLint, also allows keep all documented code.

---

## [Home](../)
Explore Application
### [Application](./application)
### [Bin](./bin)
### [Network](./network)

