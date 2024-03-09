# The Application source code

[ExpressJS](https://expressjs.com) is "Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org/en/)"
in a few words, is a tool that handles http request that income into a NodeJS machine.

We propose an architecture that isolate and manage Express function.

The main idea is develop endpoints in a solid Express interface, that brings me manage big part of behavior of the express, using the environment to setup the Express build in features. 

```bash
.
├── .env
├── public/
└── src/
   ├── application/
   ├── bin/
   └── services/
      └── router.js
```

in many cases the implementation in other frameworks are biggest, with many nested folders, and MVC (Model, View, Controller) pattern forced.

---
## Folder like module
I use the folders inside "src" folder like node modules, the importation and exportation of the units, is simple.
#### [Application](./application/)
The Application module is the abstraction that build Express and Network server
#### [bin](./bin)
Bin Module, contains a routines that runs Application.
#### [Services](./services)
The Services, contains a router module, this is a module that are configured into the Express application.


---
## Conventions

All code are written in CommonJS for the convenience of modular architecture, and I believe that all good code can easily transition to ECMASCRIPT.

When NodeJS improves ESLANG features in the future, I will consider changing the modules to ECMAMODULES.

All code, functions, modules, and scripts will adhere to the following code structure.

for Example:

```JavaScript
/**
 * @<type of file>
 * @license GPL
 * a human resume of the software unit
 * @author Jhon Doe
 */
const importedModule = require('...');

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
        console.warning('[Error on function]');
    }
}

module.exports = nameOfFunction;
```

I think that types are important but TS, in my opinion is more than only hard
types.

JSDocs is a good helper with ESLint, also allows keep all documented code.

---

## [Home](../)
### [Bin](./bin/)
### [Application](./application/)

