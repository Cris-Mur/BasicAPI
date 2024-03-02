# High managed behance of Application

[ExpressJS](https://expressjs.com) is "Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org/en/)"
in a few words, is a tool that handles http request that income into a NodeJS machine.

We propose an structure, and toolkit developed specifically for this project.

The main idea is manage big part of behavior of the application, using express in the middle without other libraries, and using the environment, that's a common interface in cloud, containers and on premise servers.

```bash
.  
├── public  
│   └── Static  
└── src  
   ├── application  
   ├── bin  
   └── services  
  
7 directories
```

Two main folders and three source folders.

The public folder are a space to serve a static files, useful for little deployments, or on premise auto managed content delivery.

For the Source architecture, explore!
#### [Application](./application/)
#### [bin](./bin)
#### [Services](./services)
---
## Conventions

All code are written in CommonJS for the convenience of modular architecture, and I believe that all good code can easily transition to ECMASCRIPT. When NodeJS improves ESLANG features in the future, I will consider changing the modules to ECMAMODULES.

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
### [Bin](./bin/)
### [Application](./application/)

