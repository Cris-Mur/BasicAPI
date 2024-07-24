---
tags:
  - Documentation
---
# Environments - env file posible content

El archivo de ambiente o environment (.env), es un archivo especial que contiene variables con información útil para el comportamiento de la aplicación.

---

# Variables para Node.js
Node.js, puede cambiar su comportamiento mediante variables de entorno.
(Cualquier cambio en las variables de entorno exige el reinicio del motor.)
## node_env
node environment es una variable que nos permite decirle al motor cual es el ambiente de ejecución, esto no solo abre la posibilidad de realizar acciones, sino que también el motor brinda algunas optimizaciones según el ambiente.

```
node_env = "production" | "development" | "custom"
```

## LOGGER OPTIONS
Las opciones de logger permiten configurar el comportamiento del registro de eventos de la aplicación, mediante la utilidad logger.

```shell
LOGGER = true | false # Habilitar la utilidad.
VERBOSE = true | false # Comportamiento Verboso. warn | debug logs
COLORED = true | false # Colores en salida de logs.
```

## HOMEBREW FEATURES
### Inspector
Permite activar el inspector de las peticiones Request que llegan a la aplicación.

```shell
INSPECTOR = true | false
```

### Error 404 & 5XX Handlers
Activa los manejadores de errores 404 y 5XX.

```shell
ERRORS_HANDLERS = true | false
```

## NETWORK SETTINGS
Configuraciones relacionadas con la red.

```shell
SERVERLESS = true | false # inhabilita las funciones de red
RESILIENT_PORT = true | false # politica de gestion puertos ocupados
PORT = <puerto de producción>
PORT_DEV = <puerto de desarrollo>
```

## EXPRESS FEATURES
Configuraciones específicas para la construccion de una applicacion Express.js.

```shell
BUILD_IN_FEATURES = true | false # Habilita la construccion de las funcionalidades.
DISSABLE_POWERED_BY = true | false # Deshabilita la cabecera
```

## JSON PARSER OPTIONS
Opciones para el parser de JSON.

```shell
JSON = true | false # Habilita la construccion del request-parser
JSON_INFLATE = true | false
JSON_LIMIT = <tamaño máximo del JSON>
JSON_STRICT = true | false
JSON_TYPE = <tipo de contenido JSON>
```

## RAW PARSER OPTIONS
Opciones para el parser de datos RAW.

```shell
RAW = true | false
RAW_INFLATE = true | false
RAW_LIMIT = <tamaño máximo de datos RAW>
RAW_TYPE = <tipo de contenido RAW>
```

## TEXT PARSER OPTIONS
Opciones para el parser de texto.

```shell
TEXT = true | false
TEXT_CHARSET = <charset del texto>
TEXT_INFLATE = true | false
TEXT_LIMIT = <tamaño máximo del texto>
TEXT_TYPE = <tipo de contenido del texto>
```

## URLENCODED PARSER OPTIONS
Opciones para el parser de datos URL-encoded.

```shell
URLENCODED = true | false
URLENCODED_EXTENDED = true | false
URLENCODED_INFLATE = true | false
URLENCODED_LIMIT = <tamaño máximo de datos URL-encoded>
URLENCODED_PARAM_LIMIT = <límite de parámetros URL-encoded>
URLENCODED_TYPE = <tipo de contenido URL-encoded>
```

## STATIC SERVER OPTIONS
Opciones para el servidor estático.

```shell
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

## CORS POLICY
Políticas de CORS para la aplicación.

```shell
CORS = true | false
SRVTOSRV = true | false # politica de origen requerido
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

```shell
SWAGGER = true | false
SWAGGER_THEME = <tema de Swagger>
# Véase https://www.npmjs.com/package/swagger-themes?activeTab=readme#themes
SWAGGER_PATH = <ruta de la uri de Swagger en la API>
```

---

todas estas configuraciones cambian el proceso de construcción de una instancia de BasicAPI llamada [application](./application.md)

---
### Licence
Este proyecto esta licenciado bajo la licencia MIT.

#### Autor
[Cris-Mur](https://github.com/cris-mur/)