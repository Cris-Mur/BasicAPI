# Logger - A usefull customization on console.log()

You dont need use a other function to make logs in the app, only you use a build in function.


```Bash
[ white ][ development ][ 2024-02-28T04:59:44.554Z ][  debug  ]    
[End of StartUp application ready]  
[ white ][ development ][ 2024-02-28T04:59:44.555Z ][   log   ]    
Startup: 7.552ms
```

---

All functions are modified like bellow, we adds little bit logic before use a build in function.

```js
/**
 * Overrides the default `console.log`.
 * @param {...any} args - Arguments to be logged.
 */
const raw_log = console.log;
console.log = function logger(...args) {
    const level = "log";
    const prefix = tag(level);
    raw_log(prefix, applyFormat(...args));
}
```

## Environment Variables

The environment is important to use this library, the application loads a environment variables and change logger behavior in base of this functions. 

```
### LOGGER OPTIONS
#NODE_ENV="production"
#LOGGER=true # enable logger
#VERBOSE=true # enable debug logs
#COLORED=true # enable colors on level tag
```


This module adds a template String before console output content like a sign to useful logs manager.

---