---
tags:
  - Documentation
---
---

# BasicAPI Documentation

La aplicación BasicAPI es una entidad que se construye en el momento del arranque de NodeJS.
```Text
          The Event Loop
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌─────────────────┐
│  ┌─────────────┴─────────────┐      │     incoming:   │
│  │           poll            │<─────┤ The Application │
│  └─────────────┬─────────────┘      └─────────────────┘
│  ┌─────────────┴─────────────┐
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘

The cycle of one execution of the NodeJS.
```
Entonces definimos BasicAPI como esta entidad que en su interior construye una instancia de express.

## Get Started

BasicAPI busca funcionar "out-of-the-box".

```node
#!/usr/bin/env node

const basicAPI = require('#Application');

```

para cambiar o definir el comportamiento de la instancia, lo puede hacer mediante le cambio de las variables de entorno registradas por Node.js

Ejemplo de ejecución de node.js en modo consola.
```bash
$ node
Welcome to Node.js v22.5.1.  
Type ".help" for more information.
> process.env.SERVERLESS = true
true  
> const basicAPI = require('#Application')  
[####][WARNING][####][RUN APPLICATION WITH ENVIRONMENT EXAMPLE]  
[ExpressDirector][Constructor][Init new instance of ExpressDirector]  
[Build][Building a express Application]
.
.
.
   'jsonp callback name': 'callback',  
   'view cache': true  
 }  
}  
[ExpressBuilder][Reset][Clean Instance]  
[this instance [object Object] was mounted]  
undefined
```

---
## Sistemas y Modelos Internos

Véase información [acerca de las variables de entorno](./environments.md).

- [Acerca de la Clase Aplicación](./application.md)
- [Acerca del patron de construcción](./builder.md)

----

#### Licencia
Projecto desarrollado bajo la licencia MIT.

#### Autor
[Cris-Mur](https://github.com/cris-mur/)