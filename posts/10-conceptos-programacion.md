---
title: 10 conceptos básicos de programación
date: '2022-01-29'
excerpt: "Cuando empiezas a programar es muy normal encontrar muchos conceptos nuevos que en ocasiones los autores asumen que debemos saber..."
category: "Datos"
cover: "/static/posts/2019.jpg"
---

Cuando empiezas a programar es muy normal encontrar muchos conceptos nuevos que en ocasiones los autores asumen que debemos saber y pasan por alto su explicación, sin embargo esa falta de información hace que la lectura o comprensión de un video no sea del todo completa. 

En el siguiente post te voy a compartir tus primeros 10 conceptos que considero básicos conocer y que espero que sean de ayuda para ti en tus primeros pasos en la programación.

### 1. Argumentos y parámetros

Los términos argumentos y parámetros en ocasiones suelen usarse de manera indistinta sin embargo tienen significados diferentes. Los **argumentos** son valores que se envían (pasan) en una función y los **parámetros** son los valores que lee la función.

### 2. Función 

Es un conjunto de instrucciones que se empaquetan o aislan en un bloque de código realizando una tarea específica y siendo llamada (invocada) de una manera más sencilla.

Ej. 

Pensemos que tenemos el siguiente código en Python de manera aislada

```
print("El objetivo es sumar dos números")
a = 10
b = 5
suma = a + b
print(f"La suma de a y b es {suma}")
```

Si quisieramos utilizar la suma en más de una vez dentro de nuestro programa o deseáramos hacer un cambio en los mensajes tendrías que repetir N veces el código, lo cuál no es recomendable, y es por eso que puedes crear una función llamada suma con los argumentos a y b.

Ej.

```
def suma(a, b):
    print("El objetivo es sumar dos números")
    suma = a + b
    return suma

# Para invocar nuestra suma en cualquier lugar de nuestro código solo debemos escribir

print(f"La suma de a y b es {suma(10, 5)}") 

# Además que podemos modificar el mensaje sin tener que ajustarlo en cada lugar donde se llame a suma()

print(f"El resultado de mi suma es {suma(10, 5)}") 

```

### 3. Debugging

La acción de debugging es cuando como programadores buscamos en nuestro código algún error o queremos entender lo que está sucediendo en diferentes fragmnentos de código. Hay diferentes formas de hacer debugging y no tengas pena si al inicio utilizas imprimir los valores en pantalla ya sea con console.log('') en Javascript o print('') en Python por mencionarte algunos lenguajes; es totalmente válido y te ayudará a conocer el estado actual de tus variables o de la sección que estás probando.

### 4. IDE

IDE por sus siglas en inglés Integrated Development Environment (Entorno de desarrollo integrado) es un conjunto de herramientas como puede ser un editor de código, herramientas de debugging, buscador, terminal, configurar la apariencia, modificar la vista, etc. 

Entre los más conocidos se encuentran:
- Visual Studio Code (es el que uso)
- Sublime text
- Atom
- PyCharm
- Webstorm
- Netbeans

## 5. Operador

Un operador es un conjunto de símbolos que efectúan una operación, cada símbolo tiene un objetivo particular, por ejemplo

- Suma +
- Resta -
- Multiplicación *
- División /

## 6. Variable

Lo puedes ver como un contenedor que almacenará un dato, hay de diferentes tipos como números, cadenas, punto decimal (flotante), booleanos (True, False), etc.

## 7. Concatenar

Es un proceso donde puedes combinar o unir cadenas de caracteres, en Python debes utilizar el operador de +

Ej.

"Hola" + "mundo" -> El resultado es "Holamundo"
"Hola " + "mundo" -> El resultado es "Hola mundo"
"Hola" + " " + "mundo" -> El resultado es "Hola mundo"

## 8. Booleano

Son datos que representan solo dos estados que son Verdadero (True) o Falso (False)

## 9. Control de versiones

Es una manera de gestionar los cambios que realizas en tu código, de manera que puedes tener un historial a los cuáles les asignas mensajes descriptivos (al menos es la recomendación) para una mejor comprensión de dichos cambios.

## 10. Git

Es una aplicación de control de versiones y el más popular hasta el momento


Estos son algunos de los conceptos que considero útiles cuando estás iniciando a programar, si bien no son los únicos espero que sean útiles para ti. Si tienes alguna consulta puedes escribirme en Twitter enviándome un mensaje a [@silvercorp](https://www.twitter.com/silvercorp)