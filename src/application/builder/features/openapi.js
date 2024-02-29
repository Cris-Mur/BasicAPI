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
        "contact": {
            "name": "API Support",
            "url": "https://www.example.com/support",
            "email": "support@example.com"
        },
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/license/mit"
        },
        "version": "0.1.6"
    },
    "servers": [
        {
            "url": `http://localhost:${6661}/`,
            "description": "Development server"
        }
    ]
}