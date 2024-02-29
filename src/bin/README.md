# [Bin/init](./init)

This script run on system one instance of NodeJS With All Environments if this script are execute in a Unix/Like Machine the shebang in first line of file, inject environment in a node execution.

```bash
#!/usr/bin/env node
```

this startup file measure waiting time to ready, also load a application util logger, network module and application module, when all application are loaded and ready to catch request, the script prints pretty info about application.

this is default method to start up application other methods are used to test or abstract application.

```JavaScript
/**  
* startup script.  
* @Script  
*/  
require('./utils/logger');
const application = require('../application');
console.time("Startup")
console.debug("StartUp Application");

/// #############################################################

const mainApplication = new application();

/// #############################################################

console.debug(`[End of StartUp application ready]`)
console.timeEnd("Startup")

```

---
### [Home](../README.md)
#### [Logger](./utils/logger/README.md)
##### [Application](../application/README.md)