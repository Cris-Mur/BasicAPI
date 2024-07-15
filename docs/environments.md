---
tags:
  - Documentation
---
# Environments - env file posible content

El archivo de ambiente o environment (.env), es un archivo especial que contiene variables con información útil para el comportamiento de la aplicación.

---

## Node Space
Node, como motor de ejecución tiene algunas variables útiles a la hora de ejecutarse.

## node_env
node environment es una variable que nos permite decirle al motor cual es el ambiente de ejecución, esto no solo abre la posibilidad de realizar acciones, sino que también el motor brinda algunas optimizaciones según el ambiente.

```
node_env = "production" | "development" | "custom"
```

## LOGGER OPTIONS
Las opciones de logger permiten configurar el registro de eventos de la aplicación.

```
LOGGER = true | false
VERBOSE = true | false
COLORED = true | false
```

## HOMEBREW FEATURES
### Inspector
Permite activar el inspector de la aplicación.

```
INSPECTOR = true | false
```

### Error 404 & 5XX Handlers
Activa los manejadores de errores 404 y 5XX.

```
ERRORS_HANDLERS = true | false
```

## NETWORK SETTINGS
Configuraciones relacionadas con la red.

```
SERVERLESS = true | false
RESILIENT_PORT = true | false
PORT = <puerto de producción>
PORT_DEV = <puerto de desarrollo>
```

## EXPRESS FEATURES
Configuraciones específicas para Express.js.

```
BUILD_IN_FEATURES = true | false
DISSABLE_POWERED_BY = true | false
```

## JSON PARSER OPTIONS
Opciones para el parser de JSON.

```
JSON = true | false
JSON_INFLATE = true | false
JSON_LIMIT = <tamaño máximo del JSON>
JSON_STRICT = true | false
JSON_TYPE = <tipo de contenido JSON>
```

## RAW PARSER OPTIONS
Opciones para el parser de datos RAW.

```
RAW = true | false
RAW_INFLATE = true | false
RAW_LIMIT = <tamaño máximo de datos RAW>
RAW_TYPE = <tipo de contenido RAW>
```

## STATIC SERVER OPTIONS
Opciones para el servidor estático.

```
STATIC = true | false
STATIC_PATH = <ruta de los archivos estáticos>
STATIC_DIR = <directorio de los archivos estáticos>
STATIC_DOTFILES = <comportamiento con archivos dotfiles>
STATIC_ETAG = true | false
STATIC_EXTENSIONS = <extensiones permitidas>
STATIC_FALLTHROUGH = true | false
STATIC_IMMUTABLE = true | false
STATIC_INDEX = <archivo de índice>
STATIC_LASTMODIFIED = true | false
STATIC_MAXAGE = <tiempo máximo de caché>
STATIC_REDIRECT = true | false
```

## TEXT PARSER OPTIONS
Opciones para el parser de texto.

```
TEXT = true | false
TEXT_CHARSET = <charset del texto>
TEXT_INFLATE = true | false
TEXT_LIMIT = <tamaño máximo del texto>
TEXT_TYPE = <tipo de contenido del texto>
```

## URLENCODED PARSER OPTIONS
Opciones para el parser de datos URL-encoded.

```
URLENCODED = true | false
URLENCODED_EXTENDED = true | false
URLENCODED_INFLATE = true | false
URLENCODED_LIMIT = <tamaño máximo de datos URL-encoded>
URLENCODED_PARAM_LIMIT = <límite de parámetros URL-encoded>
URLENCODED_TYPE = <tipo de contenido URL-encoded>
```

## CORS POLICY
Políticas de CORS para la aplicación.

```
CORS = true | false
SRVTOSRV = true | false
```

## LOCAL VARIABLES
Variables locales de la aplicación.

```
LOCAL_VARS = true | false
LOCALS = <clave:valor de variables locales>
LOCALS_KEY = <clave de variable local>
LOCALS_VALUE = <valor de variable local>
```

## SWAGGER OPTIONS
Opciones para Swagger.

```
SWAGGER = true | false
SWAGGER_THEME = <tema de Swagger>
SWAGGER_PATH = <ruta de la uri de Swagger en la API>
```