# Logger - A usefull customization on console.log()

Adding more context to Buil-in console feature


```Bash
[ white ][ development ][ 2024-02-28T04:59:44.554Z ][  debug  ]    
[End of StartUp application ready]  
[ white ][ development ][ 2024-02-28T04:59:44.555Z ][   log   ]    
Startup: 7.552ms
```


all functions are based on this pattern 

```js
const raw_log = console.log;

console.log = function logger(...args) {

const level = "log";

const prefix = tag.newTag(level);

raw_log(prefix, applyFormat(...args));

}
```


## Enviroment Variables

```
### LOGGER OPTIONS
NODE_ENV="production"
VERBOSE=true
COLORED=true
```


This moddule adds a template String 