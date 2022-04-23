---
title: Data Lake vs Data Warehouse - Las diferencias esenciales
date: '2022-03-23'
excerpt: "En este artículo, hablaremos sobre Data Lake vs Data Warehouse. Con la creciente popularidad del almacenamiento de datos y las tecnologías en la nube las soluciones como data lakes y data warehouse son conceptos que debes conocer."
category: "Datos"
cover: "/static/posts/2019.jpg"
---

Si estás iniciando en el mundo de los datos probablemente hayas escuchado sobre data lakes (lagos de datos) y data warehouse (almacenes de datos), y aunque pareciera que cumplen las mismas funciones tienes características que los hacen diferentes y resuelven temas particulares. 

Los data lakes tienen un enfoque mucho más simple, y suelen ser ideales para organizaciones y conjuntos de datos más pequeños, a diferencia de los data warehouses que son utilizadas para organizaciones y datos más grandes.

Los **data lakes** son repositorios de datos que pueden ser locales o basados en la nube, y se utilizan para análisis, almacenamiento de datos crudos que no necesitan una estructura rígida o tabular. Pensemos en que trabajamos con imágenes de rostros y videos, en el caso de los data lakes podemos almacenar archivos .jpg, .png o videos en diferentes formatos. Más adelante cuando queremos analizar esa data cruda recurriremos al espacio proporcionado por el data lake para consultarlos y a partir de ahí hacer un proceso de limpieza, análisis o simple consulta.

En el caso de los **data warehouse** tienen una estructura más rígida y tabular y donde los datos ya están previamente organizados y disponibles para su consulta. En este sentido los data warehouse ya almacenan data preparada de una manera estructurada y el objetivo es que los usuarios puedan consultar los datos sin necesidad de un proceso de limpieza como en el caso de los data lakes.

En cuanto a la consulta y uso de cada uno, pueden utilizarse por los siguientes roles:

* **Data lake:** Analistas de datos, científicos de datos, ingenieros de datos.
* **Data warehouse:** Analistas de negocios, analistas de datos, ingenieros de datos, área de negocios.


### ¿Cuál debo usar?

Dependiendo de la necesidad de tu organización, el uso de un data lake o data warehouse puede ser una buena opción, o inclusive deberás usar ambas. 

Si en la organización tienen procesos donde no solo obtienen datos y también requieren crear reportes de visualización de datos entonces mi recomendación sería usar ambas. El data lake para almacenar toda la data cruda que se seguirá usando para diferentes problemáticas del negocio y una vez que se tiene el resultado poder almacenarlo en un data warehouse.

Una recomendación adicional, es que tengas cuidado de cómo almacenas y que tanto almacenas en los data lakes, debido a que tienen una estructura menos rígida es muy simple perder el control de la organización, duplicar contenido o en muchos casos almacenar datos que no se necesitan.

### Conclusión

El data lake y data warehouse son conceptos que si te involucras o estás involucrando en data debes conocer y usar. 

Para acotar la idea de una manera **muy simplista** puedes pensar que los **data lakes** es una caja de cartón donde guardar piezas de lego de diferentes formas, colores y tamaños, y los **data warehouse** es una caja especialmente para legos donde ya has formado figuras que tienen un objetivo en común.

Si te pareció útil este artículo te invito a compartirlo en tus redes sociales.



---





