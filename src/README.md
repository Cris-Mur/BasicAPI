# NodeJS HTTP Server using Express

This is a NodeJS Application thats run a Http server under Express Framework.

the architecture of [src](./) directory suguest isolated spaces for required features, the aplication startup begins in [bin](./bin/) directory, here exist startup script.

This application are developed based on node LTS at 2023, also thinking on a latest features on Engine.

## Conventions

All code are writed in CommonJS, and implement a Module pattern, also is mandatory that all code follow this structure for modules and functions.

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
---

## [Home](../)
### [Application](./application)
### [Bin](./bin)
### [Network](./network)