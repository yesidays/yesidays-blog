---
title: ¿Que es un Pickle en Aprendizaje Automático?
date: '2021-12-03'
excerpt: "Si estás leyendo y aprendiendo ML tal vez te has encontrado con el término Pickle, en este post te explicaré cuál es su utilidad."
category: "Tech"
cover: "/static/posts/2019.jpg"
---

Cuando utilicé por primera vez un modelo de Aprendizaje Automático en una investigación pensé que el tener un resultado era más que suficiente, sin embargo cuando lo quieres aplicar a la industria o llevarlo a producción no es suficiente el hecho de tener un dato, una matriz de resultados o algo más. 

De alguna manera debemos empaquetarlo, guardarlo y después cargar el modelo de ML para así poder aplicarlo a una nueva entrada de datos o ajustes de posibles cambios en el escenario inicial. Para ello es posible serializar un objeto de Python en un archivo binario, a esto se le conoce como **Pickle**.

**¿Pero como funciona?**. 

Imaginemos que debemos encontrar similitudes entre los clientes que han comprado productos en nuestra tienda en línea y poder agruparlos de manera que nos permita predecir el comportamiento de los clientes en el futuro. En lo personal, lo que hago es abrir Jupyter Notebook o Google Colab, cargo un conjunto de datos y empiezo a realizar todo el proces de limpieza, normalización, entre otras tareas hasta el momento de seleccionar un modelo y obtener un resultado. 

Este proceso y además la exploración y entendimiento de los datos prefiero hacerlo en un notebook por su facilidad de uso, despliegue de variables, que puedo documentar ahí mismo todo el proceso y otros gustos personales. 

Como ese notebook no es posible usarlo de una manera ni adecuada en un ambiente productivo tenemos que crear nuestras funciones y clases para posteriormente serializarlo y tener ese modelo final representado como Pickle.

Para hacerlo hay dos métodos principales que son:

> pickle.dump(obj, file, protocol=None)

El cuál es el método que serializa un objeto de Python en un archivo binario.

> pickle.load(file)

Que es el encargado de deserializar un objeto de Python a partir de un archivo binario.

Si deseas ver un ejemplo práctico y con una explicación más profunda te recomiendo el video titulado Machine Learning Tutorial Python - 5: Save model using Joblib and Pickle de CodeBasics.

[![Save model to file](https://i.ytimg.com/vi/KfnhNlD8WZI/hqdefault.jpg)](https://www.youtube.com/watch?v=KfnhNlD8WZI)
