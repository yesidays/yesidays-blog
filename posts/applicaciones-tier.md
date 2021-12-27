---
title: ¿Qué son los 'tiers' en la arquitectura de software?
date: '2021-12-27'
excerpt: "Cuando nos involucramos en la arquitectura de software es necesario saber como vamos a dividir los diferentes posibles componentes que tendrá nuestra aplicación, en el siguiente post te comparto los 'tiers' más conocidos"
category: "Tech"
cover: "/static/posts/2019.jpg"
---

Cuando se habla de arquitectura de software es posible hacer dos tipos de separaciones y son a nivel lógico (código) y físico. En este post te hablaré de la separación física también conocida en inglés como "tier".

Entre los componentes más conocidos que se tienen son: base de datos, interface de usuario, backend, caching, mensajería y balanceadores. Hay diferentes formas de dividirlo físicamente desde el "single" hasta el N-tier.

### Single-tier

En el caso de las aplicaciones "single-tier" o también de un solo nivel son aquellas donde la interfaz de usuario, nuestro backend y la base de datos se encuentran en la misma máquina; un ejemplo de ello son las aplicaciones de escritorio.

Entre sus ventajas se encuentran que no tienen latencia de red debido a que todos los componentes están situados en la misma máquina y los datos están disponibles de una manera rápida y sencilla de obtener, y para lograr este rendimiento también dependerá de la máquina y sus características. Entre sus grandes desventajas se encuentra que no se tienen un control completo de la aplicación y las actualizaciones se realizan cuando el cliente lo decide y descargando el nuevo parche.


### Two-tier

Las aplicaciones de dos niveles o "two-tier" ya se involucran a un cliente y un servidor. 

El cliente va a contener la interfaz del usuario y el servidor la lógica del sistema, a diferencia del anterior se alojan en diferentes máquinas. Entre sus ventajas son las llamadas al backend y también suele mantener baja latencia, y las actualizaciones son separadas.

### Three-tier

Las aplicaciones divididas en tres niveles físicos son populares y muy utilizadas en la industria de Software. Es una aplicación dónde la interfaz de usuario, la lógica del negocio y la base de datos están separadas y por lo tanto la actualización de cada una es independiente. 

Si pensamos en la idea de un blog, podemos tener el código HTML, CSS y Js en un lugar, el backend ejecutándose en un servidor Apache o Nginx y por último la base de datos en MySQL o Postgresql, solo por poner un ejemplo. 

### N-Tier

Por último se encuentran las aplicaciones de N-Niveles que incluyen los componentes anteriores y aún más, y suele aplicarse a aplicaciones más robustas, con necesidad de escalabilidad, seguridad, con una complejidad mayor a la de un blog.

Entre sus componentes se pueden encontrar: cache, balanceadores de carga, bases de datos, componentes que involucran el manejo masivo de datos, queues, mensajería, etc.

Las redes sociales son el claro ejemplo del uso de la división N-tier y su necesidad de escalar y manejar grandes cantidades de datos además de pensar en una estabilidad en sus servicios.

Entre sus ventajas de hacerlo de esta manera es separar la responsabilidad de la modificación y seguimiento de cada una de sus partes además de detectar en dónde puede ocurrir un error principal y solo enfocarnos a ese componente.

Este enfoque nos permite mucha flexibilidad, comunicación y mejora de los componentes.

Es importante mencionar que la separación por capas lógicas y físicas son diferentes, en este post me enfoqué exclusivamente en la parte física. 

Espero que te haya sido útil y si fue así te invito a compartirlo.
