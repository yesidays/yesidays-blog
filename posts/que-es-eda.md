---
title: ¿Qué es el análisis exploratorio de datos (EDA)?
date: '2022-01-22'
excerpt: "El análisis exploratorio de datos también conocido como EDA por sus siglas en inglés, es el proceso de investigar conjuntos de datos..."
category: "Datos"
cover: "/static/posts/2019.jpg"
---

El análisis exploratorio de datos también conocido como EDA por sus siglas en inglés, es el proceso de investigar conjuntos de datos basada en la búsqueda de patrones y comportamientos en los datos. De esta manera evitamos hacer suposiciones y obtener información para así tomar decisiones justificadas.

**EDA tiene ventajas, como:**
* Tener una mejor comprensión de las variables de nuestra información, mediante la extracción de promedios, medidas de dispersión, correlación, etc.
* Descubrir valores atípicos, valores faltantes, errores en la información, etc.
* Identificar patrones y comportamientos en los datos.
* Identificar variables que pueden ser utilizadas para predecir y realizar pronósticos.

El objetivo de esta etapa es comprender mejor los datos y utilizar técnicas o herramientas de manera efectiva para obtener información valiosa y sacar conclusiones.

Cuando tenemos información inicial sin ningún proceso previo podemos llamarle **data cruda o "raw data"**, es por ello la importancia de aplicar EDA y tener datos limpios para continuar con las siguientes etapas de comprensión de la información, creación de modelos, obtención de descubrimientos (insights), etc.

A continuación pondré como ejemplo un conjunto de datos popular y utilizado en las primeras etapas de aprendizaje de conceptos de análisis de datos, y es el caso de Iris.

```
# Importación de librerías
import pandas as pd
from sklearn.datasets import load_iris # Datos de Iris
import matplotlib
import matplotlib.pyplot as plt

# Cargar los datos de Iris
iris_data = load_iris()

# Uso de dataframe
iris_dataframe = pd.DataFrame(iris_data.data, columns = iris_data.feature_names)
iris_dataframe['class'] = iris_data.target

# Despliegue de las clases de Iris
print(iris_dataframe.head())
```

Con esto tendremos como resultado un dataframe con las siguientes columnas: 
* sepal length (cm)
* sepal width (cm)
* petal length (cm)
* petal width (cm)
* class

Lo que nos permite una primera visualización de los datos con los cuáles vamos a trabajar, con el objetivo de poder identificar las variables que vamos a utilizar para el análisis.

Un método que utilizo para conocer los valores estadísticos es **describe()**, que nos permite conocer la cantidad de datos, mínimos, máximos, la mediana, la moda, etc.

```
print(iris_dataframe.describe())
```

Los valores resultantes son: count, mean, std, min, 25%, 50%, 75% y max. Por lo que ahora conocemos aún más información de nuestro conjunto de datos, como te puedes dar cuenta ya estás haciendo un EDA en unas cuentas líneas.

Otra etapa que no puedes dejar pasar cuando trabajas con data cruda es reemplazar los datos nulos, y una técnica utilizada es reemplazar los datos nulos por un valor específico o con la media, para eso puedes usar el método **fillna()**.

```
# Mostremos el número de datos nulos que tenemos en cada columna
print("Datos nulos por columna:")
print(iris_dataframe.apply(lambda x: sum(x.isnull()), axis=0))

# Reemplazar los valores nulos con la media de la columna
iris_dataframe['sepal width (cm)'].fillna(iris_dataframe['sepal width (cm)'].mean(), inplace=True)

```

> **Nota:** El método **fillna()** no es una función de pandas, es una función de numpy.

A partir de aquí puedes crear gráficas que te apoyen visualmente a la comprensión de la información como el uso de Box plot, histogramas, gráficos de dispersión, etc.

Esto es solo un pequeño ejemplo de cómo usar EDA para la comprensión de tu información.

Si quieres saber más sobre EDA, te recomiendo la especialidad de Ciencia de Datos impartida por [Código Facilito](https://www.codefacilito.com/) y todo encontrarás un módulo de casi 11hrs dónde aprenderás a profundidad más sobre EDA.

Si te sirvió este post te invito a compartirlo en tus redes sociales y seguirme en [Twitter](https://www.twitter.com/silvercorp).



