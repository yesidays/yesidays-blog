---
title: ¿Qué es una base de datos NoSQL?
date: '2021-03-04'
excerpt: "Las bases de datos NoSQL son de uso popular en la industria..."
category: "Personal"
cover: "/static/posts/2019.jpg"
---

Antes de comentar voy a definir lo que es una <strong>base de datos (BD)</strong>, lo cuál es una colección organizada de información estructurada de información, y podemos usarla para almacenar datos de un sistema informático. Hay diferentes sistemas de gestión y herramientas visuales que nos ayudan a facilitarnos su uso, consulta y administración.

Hay diferentes tipos de bases de datos y cada una tiene sus ventajas y desventajas, en este post me enfocaré a explicarte las consideradas NoSQL.

Lo primero que debes saber es que las BD de tipo NoSQL almacenan los datos en forma de colecciones, y estas colecciones son organizadas en documentos, y su forma la podemos representar como un Object Notation (JSON), es decir:

```
{
    "_id": "5e7b9f9f9f9f9f9f9f9f9f9",
    "nombre": "Yesi",
    "apellido": "Diaz",
    "twitter": "@silvercorp"
}
```

Algunos de los ejemplos más populares de BD NoSQL son MongoDB, Redis, HBase, Neo4j, DynamoDB y Cassandra.


### Ventajas

Entre las ventajas de las bases de datos NoSQL se encuentran:

* No tienen un esquema predefinido, por lo que podemos agregar y elimar campos de forma dinámica sin que afectemos la estructura de otro registro.
* Podemos almacenar fácilmente datos no estructurados.
* Podemos almacenar datos de diferentes tipos, como texto, números, fechas, etc.
* Es útil y más fácil utilizar una NoSQL en entornos que cambian con frecuencia, como es el caso de las redes sociales.


### Desventajas

Sin embargo, como todo, hay algunas desventajas que debemos considerar:

* La fiabilidad y coherencia entre los datos es más difícil de garantizar y de mantener, como desarrolladores debemos implementar nuestras propias reglas para ello.
* El análisis de datos suele ser más complicado de realizar en BD de este estilo.
* Cuando las colecciones de datos son muy grandes el almacenamiento y mantenimiento es más costoso y difícil.


En mi experiencia el uso de NoSQL nos ha funcionado cuando se trata de sistemas con estructuras dinámicas, con esto quiero decir que los campos que se almacenan pueden ser diferentes dependiendo del proceso que se está realizando. Como es el caso de transacciones, recomendaciones, información recolectada de redes sociales, datos de sensores, entre otros.

Mi recomendación es que no te dejes llevar por lo popular y hagas un análisis a detalle y con consciencia de si este tipo de de BD es la solución para tu desarrollo.

Espero que este post haya sido de utilidad para ti, nos leemos en [redes](https://www.twitter.com/silvercorp). 





