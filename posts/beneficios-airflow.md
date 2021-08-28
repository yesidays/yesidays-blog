---
title: Beneficios de Apache Airflow
date: '2021-02-26'
excerpt: "Apache Airflow es una plataforma de gestión de flujo de trabajo de código abierto escrita en Python, donde los flujos de trabajo se crean a través de scripts de Python..."
category: "Airflow"
cover: "/static/posts/2019.jpg"
---


> Apache Airflow es una plataforma de gestión de flujo de trabajo de código abierto escrita en Python, donde los flujos de trabajo se crean a través de scripts de Python. Fue creada por Airbnb en octubre de 2014 como solución para la gestión de flujos de trabajo dentro de la empresa.” - Fuente Wikipedia

Es una de las plataformas que más utilizo para automatizar y que me ha ayudado a mejorar mi flujo de trabajo debido a que realizo una correcta división de las tareas, en el siguiente post te comparto cuáles son otros beneficios que he encontrado al usar Apache Airflow.

<strong>DAGs.</strong> Es primordial al usar Airflow el conocer que es un DAG o también conocidos como Grafos Dirigidos Acíclicos, son los encargados de configurar la secuencia de tareas que se pueden definir de manera individual, y en el caso de que alguna falle es posible retomar a partir de ella y no interrumpir por completo el flujo de trabajo.

<strong>Papermill.</strong> Esta es una de mis bibliotecas favoritas debido a que permite ejecutar notebooks de Jupyter a través de un operador llamado PapermillOperator, por lo que puedes crear tu notebook y posteriormente ser ejecutado desde tu DAG sin que tengas que reescribir o generar un nuevo módulo, es una manera fácil de integrarlo.

<strong>Monitoreo de tareas.</strong> El WebUI de Airflow tiene una sección para poder monitorear el estado de tu DAG y de las tareas de manera separada, la gran ventaja es la forma visual que es sencillo de comprender cuando alguna ha fallado, se ha completado se encuentra ejecutándose, etc. Cada status tiene un color en particular por lo que visualmente es simple de comprender en qué etapa se encuentra.

<strong>Integración de Opsgenie.</strong> Es una plataforma de alertas que puede ser integrada a Airflow y a cada uno de los DAGs a través de un identificador, además se pueden definir reglas que en cuanto se cumplan se envía de una manera automatizada un mensaje indicando que es lo que ha fallado en nuestro DAG. De esta forma no es necesario estar monitoreando todo el tiempo nuestro flujo de trabajo, únicamente llegará un mensaje a nuestra bandeja de correo, un SMS o inclusive una llamada telefónica. Aunque no es un servicio gratuito si tiene una capa de prueba.

Como puedes ver Apache Airflow tiene grandes ventajas al momento de utilizarse como flujo de datos, lo importante es incluir aquellas herramientas que lo hacen aún más poderoso.