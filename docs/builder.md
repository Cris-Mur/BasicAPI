
# Class Builder

```mermaid
classDiagram
    class Builder {
        -static #result
        +static reset()
        +static getResult() object
    }
```

## Descripción

El módulo `Builder` es una clase que proporciona métodos para construir y obtener resultados. Permite restablecer el resultado a un objeto vacío y obtener el resultado actual.

### Propiedades

- **#result**: Almacena el resultado.

### Métodos

#### reset

```javascript
reset()
```
Restablece el resultado a un objeto vacío.

#### getResult

```javascript
getResult()
```
Devuelve el resultado actual.

- **Retorno**: `object` - El resultado actual.

---
# Class ExpressBuilder

```mermaid
---
title: ExpressBuilder Class
---
classDiagram
    class Builder {
        <<abstract>>
    }

    class ExpressController {
        // properties and methods of ExpressController
    }

    class ExpressBuilder {
        -#result
        +reset()
        +stepBuildinFeatures()
        +stepDisablePoweredby()
        +stepSetFavicon()
        +stepSwagger()
        +stepSetInspector()
        +stepSetErrorHandler()
        +stepSetRouter()
        +stepSetLocals()
        +getResult() ExpressController
    }

    ExpressBuilder --> Builder : inherits
    ExpressBuilder --> ExpressController : uses
```


## Descripción

La clase `ExpressBuilder` proporciona todos los métodos necesarios para construir una aplicación Express. Hereda de la clase `Builder` y permite configurar diversas características de la aplicación Express mediante pasos específicos.

## Clase ExpressBuilder

### Propiedades

- **#result**: Almacena la instancia de `ExpressController`.

### Métodos

#### reset

```javascript
reset()
```
Restablece el resultado a una nueva instancia de `ExpressController`.

#### stepBuildinFeatures

```javascript
stepBuildinFeatures()
```
Añade características integradas a la aplicación si están habilitadas por las variables de entorno.

#### stepDisablePoweredby

```javascript
stepDisablePoweredby()
```
Desactiva el encabezado 'x-powered-by' por motivos de seguridad si está habilitado por las variables de entorno.

#### stepSetFavicon

```javascript
stepSetFavicon()
```
Configura el favicon para la aplicación.

#### stepSwagger

```javascript
stepSwagger()
```
Configura la documentación Swagger para la aplicación si está habilitada por las variables de entorno.

#### stepSetInspector

```javascript
stepSetInspector()
```
Configura el middleware de inspector si está habilitado por las variables de entorno.

#### stepSetErrorHandler

```javascript
stepSetErrorHandler()
```
Configura los manejadores de errores si están habilitados por las variables de entorno.

#### stepSetRouter

```javascript
stepSetRouter()
```
Configura el enrutador principal para la aplicación.

#### stepSetLocals

```javascript
stepSetLocals()
```
Configura variables locales para la aplicación si están habilitadas por las variables de entorno.

#### getResult

```javascript
getResult()
```
Devuelve el resultado actual y restablece el constructor.

- **Retorno**: `ExpressController` - El resultado actual.

---

# ExpressController

```mermaid
---
title: Express Controller Class
---
classDiagram
    class ExpressController {
        -#features
        -#locals
        -#app
        +constructor()
        +getFeatures() object
        +getLocals() object
        +getApplication() object
        +pushInFeatures(feature: object, path: string="/")
        +addGlobalFeature(feature: object)
        +addRoutedFeature(path: string, feature: object)
        +setFavicon(faviconPath: string)
        +disableProperty(property: string) boolean
        +enableProperty(property: string) boolean
        +getProperty(property: string) any
        +setApplicationLocalVar(localKey: string, localValue: any)
        +getApplicationLocalVar(localKey: string) any
        +unSetApplicationLocalVar(localKey: string) any
        +setApplicationSetting(name: string, value: any) any
        +settupApplicationNetworkPort(port: number) any
    }

    class express {
        <<module>>
    }

    class path {
        <<module>>
    }

    ExpressController --> express : uses
    ExpressController --> path : uses
```

## Descripción

El módulo `ExpressController` es un controlador para una instancia de aplicación de Express. Proporciona métodos para gestionar características globales y enrutadas, configurar variables locales y de entorno, y manipular configuraciones de la aplicación.

## Clase ExpressController

### Propiedades

- **#features**: Almacena las características de la aplicación.
- **#locals**: Almacena las variables locales de la aplicación.
- **#app**: Instancia de la aplicación Express.

### Métodos

#### Constructor

```javascript
constructor()
```
Inicializa una nueva instancia de la clase `ExpressController`.

#### getFeatures

```javascript
getFeatures()
```
Devuelve las características de la aplicación.

- **Retorno**: `object` - Las características de la aplicación.

#### getLocals

```javascript
getLocals()
```
Devuelve las variables locales de la aplicación.

- **Retorno**: `object` - Las variables locales de la aplicación.

#### getApplication

```javascript
getApplication()
```
Devuelve la instancia de la aplicación Express.

- **Retorno**: `object` - La instancia de la aplicación Express.

#### pushInFeatures

```javascript
pushInFeatures(feature, path = "/")
```
Añade una característica a la ruta especificada.

- **Parámetros**:
  - `feature` (`object`): La característica a añadir.
  - `path` (`string`, opcional): La ruta a la que añadir la característica. Por defecto es "/".

#### addGlobalFeature

```javascript
addGlobalFeature(feature)
```
Añade una característica global a la aplicación.

- **Parámetros**:
  - `feature` (`object`): La característica global a añadir.

#### addRoutedFeature

```javascript
addRoutedFeature(path, feature)
```
Añade una característica enrutada a la aplicación.

- **Parámetros**:
  - `path` (`string`): La ruta a la que añadir la característica.
  - `feature` (`object`): La característica a añadir.

#### setFavicon

```javascript
setFavicon(faviconPath)
```
Configura el favicon de la aplicación.

- **Parámetros**:
  - `faviconPath` (`string`): La ruta del favicon.

#### disableProperty

```javascript
disableProperty(property)
```
Desactiva una propiedad en la configuración de la aplicación.

- **Parámetros**:
  - `property` (`string`): La propiedad a desactivar.

- **Retorno**: `boolean` - El estado desactivado de la propiedad.

- **Errores**: Lanza un error si la propiedad no existe en la configuración de la aplicación.

#### enableProperty

```javascript
enableProperty(property)
```
Activa una propiedad en la configuración de la aplicación.

- **Parámetros**:
  - `property` (`string`): La propiedad a activar.

- **Retorno**: `boolean` - El estado activado de la propiedad.

- **Errores**: Lanza un error si la propiedad no existe en la configuración de la aplicación.

#### getProperty

```javascript
getProperty(property)
```
Obtiene una propiedad de la configuración de la aplicación.

- **Parámetros**:
  - `property` (`string`): La propiedad a obtener.

- **Retorno**: `any` - El valor de la propiedad.

#### setApplicationLocalVar

```javascript
setApplicationLocalVar(localKey, localValue)
```
Configura una variable local en la aplicación.

- **Parámetros**:
  - `localKey` (`string`): La clave de la variable local.
  - `localValue` (`any`): El valor de la variable local.

#### getApplicationLocalVar

```javascript
getApplicationLocalVar(localKey)
```
Obtiene una variable local de la aplicación.

- **Parámetros**:
  - `localKey` (`string`): La clave de la variable local.

- **Retorno**: `any` - El valor de la variable local.

#### unSetApplicationLocalVar

```javascript
unSetApplicationLocalVar(localKey)
```
Desconfigura una variable local en la aplicación.

- **Parámetros**:
  - `localKey` (`string`): La clave de la variable local.

- **Retorno**: `any` - El valor eliminado de la variable local.

#### setApplicationSetting

```javascript
setApplicationSetting(name, value)
```
Configura un ajuste en la aplicación.

- **Parámetros**:
  - `name` (`string`): El nombre del ajuste.
  - `value` (`any`): El valor del ajuste.

- **Retorno**: `any` - El valor configurado.

#### settupApplicationNetworkPort

```javascript
settupApplicationNetworkPort(port)
```
Configura el puerto de red para la aplicación.

- **Parámetros**:
  - `port` (`number`): El puerto a configurar.

- **Retorno**: `any` - El puerto configurado.

---

## Licencia
Este proyecto está licenciado bajo la licencia MIT.

## Autor
[@Cris-mur](https://github.com/cris-mur)
