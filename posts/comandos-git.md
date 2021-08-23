---
title: Comandos básicos de Git
date: '2020-01-02'
excerpt: "Git es un software de control de versiones gratuito y de código abierto creado por Linus Torvalds. El objetivo del control..."
category: "Git"
cover: "/static/posts/post2.jpg"
---

Git es un software de control de versiones gratuito y de código abierto creado por Linus Torvalds. El objetivo del control de versiones es llevar un historial en nuestros cambios y es indispensable para coordinar el trabajo en equipo y tener un seguimiento en el avance de los proyectos.

En este post te dejo los comandos básicos más utilizados cuando trabajamos con Git.

<h5>Crear repositorio local</h5>
Debes posicionarte vía línea de comandos en la carpeta que contendrá los archivos de tu repositorio.

> git init

<h5>Clonar un repositorio</h5>

Vía HTTP
> git clone http://dominio.com/usuario/repositorio.git`

Vía SSH
> git clone ssh://usuario@dominio.com/repo.git`

<h5>Visualizar cambios locales</h5>
Despliega el listado de los archivos y carpetas que tienen cambios

> git status

<h5>Muestra el historial del proyecto, son los cambios ya confirmados.</h5>

> git log

<h5>Desplegar el historial de cambios de un usuario en específico</h5>

> git log --author="usuario"

<h5>Manejo de cambios locales</h5>
Agrega los archivos que se especifican. No afecta el repositorio de manera significativa hasta que se usa git commit.

> git add archivo.extension

<h5>Agrega todos los archivos que tengan cambios</h5>

> git add .

Es el comando para confirmar que se efectuarán los cambios de los archivos definidos con git add. Con -m agregas un mensaje que describa de manera clara tus cambios

> git commit -m "Mensaje descriptivo de tus cambios"

Administración de ramas
Despliega las ramas locales existentes

> git branch

<h5>Cambiar a una rama</h5>

> git checkout nombre_rama

<h5>Eliminar rama local</h5>

> git branch -d nombre_rama

<h5>Repositorios remotos</h5>
Agregar un repositorio remoto a la etiqueta “origin”

> git remote add origin **url**

<h5>Eliminar url a la etiqueta “origin”</h5>

> git remote rm origin

<h5>Obtener los cambios del repositorio remoto al local</h5>

> git pull origin master

Para un listado más completo puedes acceder al siguiente archivo <a href="https://github.github.com/training-kit/downloads/es_ES/github-git-cheat-sheet.pdf">PDF</a>