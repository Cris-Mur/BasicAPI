/**
 * To more information about open API Spec
 * https://spec.openapis.org/oas/latest.html
 */

module.exports = {
    openapi: '3.1.0',
    info: {
        "title": "Basic API Reference",
        "summary": "A API specification.",
        "description": "This is a sample server.",
        "termsOfService": "https://example.com/terms/",
        "version": "0.1.31",
        "contact": {
            "name": "API Support",
            "url": "https://www.example.com/support",
            "email": "support@example.com"
        },
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/license/mit"
        }
    },
    "servers": [
        {
            "url": `http://localhost:${6661}/`,
            "description": "Development server"
        },
        {
            "url": `https://basicapi-dev-aktc.4.us-1.fl0.io`,
            "description": "fl0 deploy server"
        }
    ]
}