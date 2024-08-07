# The Application source code

[ExpressJS](https://expressjs.com) is "Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org/en/)" - Express quote.
In a few words, is a tool that handles http request that income into a NodeJS machine.

The main idea is provide a solid interface with Express to develop endpoints more easily;

Application Source FSTree
```bash
.
├── .env
├── public  
│   └── Static  
└── src
   ├── application/
   ├── bin/
   ├── services/
   │   └── router.js  
   └── utils
```
---
## Folder like module
I prefer use the folders inside "src" folder like modules, the importation and exportation of the units are like water.
#### [Application](./application/)
#### [bin](./bin)
#### [Services](./services)
#### [Utils](./utils)

---
## Conventions

All code are written in CommonJS for the convenience of modular architecture, and I believe that all good code can easily transition to ECMASCRIPT.

When NodeJS improves ESLANG features in the future, I will consider changing the modules to ECMA-MODULES.

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
 * @Async|Function nameOfFunction
 * @description - Descriptive message about
 * function, how works in simple words.
 * @param nameOfParam <type> - Description
 * @return <type>
 * Additional information JSDOCS Compatible
 */
async function nameOfFunction (nameOfParam) {
    // The functions should do only one thing and be as specific as possible.
    // Use Try/Catch if your function can be fail.
    // try to use isolated error handling.
    try {
        // code of function.
    } catch (errorOn) {
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