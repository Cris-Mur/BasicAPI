# [Bin/init](./init)

This script run on system one instance of NodeJS With All Environments if this script are execute in a Unix/Like Machine the shebang in first line of file, inject environment in a node execution.

```Bash
#!/usr/bin/env node
```

this startup file measure waiting time to ready, also load a application util logger, network module and application module, when all application are loaded and ready to catch request, the script prints pretty info about application.

this is default method to start up application other methods are used to test or abstract application.

```JavaScript
/**  
* startup script.  
* @Script  
*/  
const logger = require('../src/utils/logger');  
console.time("Startup")  
console.debug("StartUp Application");  
require('dotenv').config();  
  
const network = require('../src/network');  
const application = require('../src/application');  
  
// Start the application  
const app = application;  
  
console.debug('[Application]', app.mountpath);  
  
// Normalize the port and set it on the application  
const port = network.utils.port;  
app.set('port', port);  
  
// Create and start the server  
const server = network._http.create_server(app);  
server.listen(port);  
  
// Handle server errors and listening events  
server.on('error', network._http.onError);  
server.on('listening', network._http.onListening);  
  
console.debug(`[End of StartUp application ready]`)  
console.timeEnd("Startup")
```

---
### [Home](../README.md)
#### [src](../src/README.md)
#### [Application](../src/application/README.md)