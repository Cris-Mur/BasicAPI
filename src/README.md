# Fully Setable Application ExpressJS

[ExpressJS](https://expressjs.com) is a framework for handling HTTP requests of build in Node.js runtime engine [http server](https://nodejs.org/api/http.html#http).

This application propose an architecture, structure, and toolkit developed specifically for this project.

The main idea is to address all the general needs of a "WEB API". For example, parsing JSON requests or providing a usable way to track behavior. In many projects, I've found myself doing the same tasks repeatedly. ExpressJS already handles these tasks, and my goal is to maintain a secure, lightweight, simple, and easily customization solution.

## Conventions

All code is written in CommonJS for the convenience of modular architecture, and I believe that all good code can easily transition to ESModule. If NodeJS improves ESLANG features in the future, I will consider changing the modules to ECMASCRIPT.

All code, functions, modules, and scripts will adhere to the following code structure.

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
Explore!!
### [Bin](./bin/README.md)
### [Application](./application/README.md)

