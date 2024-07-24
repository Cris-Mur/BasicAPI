/**
 * To more information about open API Spec
 * https://spec.openapis.org/oas/latest.html
 * https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md
 * 
 * This file loads a openAPI JSON file, with initial documentation
 * then of file loads, we can add any modification, be careful with previous 
 * information thats not overwrite.
 */

const port = require('#Network').port.getPort();
const openapi = require('./OpenApi.json');

openapi.servers = [
    {
        "url": `http://localhost:{port}/`,
        "description": "Development server",
        "variables": {
            "port": {
                "default": port
            },
        },
    },
    ...openapi.servers
];

module.exports = openapi;