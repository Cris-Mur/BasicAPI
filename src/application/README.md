# [Application](./index.js)

The "Application" is a class module abstraction responsible for Express and Http server. please review [index](./index.js)

---

## [builder](./builder)
The builder module, have the responsibility to build a express application, pushing all required middle-wares and policies into express.

---
## Build in Features

### [json](./config/_json/index.js)
This module exports a function that configures the application to use a JSON body parser. It allows the application to process incoming requests with a JSON payload. This is useful when you expect requests to your application to send data in JSON format, which is common in REST web applications.

### [raw](./config/_raw/index.js)
This module exports a function that configures the application to handle raw data sent in requests. It's useful when dealing with less common or unstructured content types.

### [Static](./config/_static/index.js)
This module exports a function that handles environment settings related to serving a static file system. Static files like images, stylesheets, and JavaScript files are served directly to the browser without further processing by the server.

### [text](./config/_text/index.js)
This module exports a function that handles environment settings related to processing requests with plain text format bodies. It's useful when you expect requests to contain data in plain text format.

### [urlencoded](./config/_urlencoded/index.js)
This module exports a function that handles environment settings related to processing requests with urlencoded body format. This is a commonly used format for sending form data from a browser to a server.

### [locals](./config/_locals/index.js)
This module exports a object that collect environment settings to set up variables within the application. This can be useful for sharing information across different parts of the application.

### [CORS](./)
This module exports a function that returns a CORS (Cross-Origin Resource Sharing) middleware that handles requests and sets CORS policies. This is important when your application needs to interact with resources (like APIs) from different domains.

These modules are part of the Express configuration and provide specific functionalities to tailor the application to different types of requests and environments. Each of them focuses on a particular aspect of configuration and request handling in an Express application.

---

# Home made Middle-wares

### [404](./builder/features/homebrew/middlewares/cannot_get/index.js)
This middleware captures all requests that aren't handled by the application's router. It comes into play when a requested resource cannot be found.

### [5XX](./builder/features/homebrew/middlewares/error_handler/index.js)
This middleware intercepts errors that occur within endpoint middlewares. It's responsible for handling server errors and ensuring a graceful response is sent back to the client.

### [Inspector](./builder/features/homebrew/middlewares/inspector/index.js)
This middleware intercepts all requests and injects a performance measurement object. Additionally, it generates a neatly formatted log of the incoming request, providing insights into the application's performance and behavior.