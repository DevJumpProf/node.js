<img  src='../logo.png' height='70px'>

# Lección 1: Introducción a Express

* Introducción a Express
* QUÉ ES UN FRAMEWORK
* CÓMO USAR EXPRESS


## Introducción a Express

Es un framework que facilita y
agiliza el desarrollo de
aplicaciones web en Node JS.

## QUÉ ES UN FRAMEWORK

Un framework es un entorno de trabajo que trae resueltas una serie de tareas, automatizando así el desarrollo de cualquier aplicación.
Los frameworks de Node.js se utilizan principalmente por su productividad, escalabilidad y velocidad. Express es uno de los más populares y estable y es muy utilizado tanto para aplicaciones web como para mobile.

## CÓMO USAR EXPRESS

Lo primero que hay que hacer es instalar la librería en un
proyecto Node ya inicializado, es decir, haber hecho npm init y tener creado el archivo package.json .

```javascript  
npm install express --save
```

Con el comando --save estamos guardando, en la propiedad dependencies del archivo package.json , una referencia a la librería que estamos instalando. De esta manera, quien quiera clonar el proyecto, podrá instalar todas las dependencias que el mismo necesita para funcionar haciendo uso de npm install.

Una vez instalado Express, tendremos que requerir el módulo
en nuestro entry-point,app.js .

```javascript 
const express = require('express');
```

Lo que devuelve la librería es una función que encapsula todas las funcionalidades de Express y para poder empezar a usarlas, hace falta ejecutar esa función. Lo próximo entonces, sería crear una variable nueva y almacenar en ella la ejecución de express y así poder tener todos lo métodos de la librería disponibles.

```javascript 
const app = express();
```
Cada vez que necesitemos
trabajar con Express, hace falta
instalarlo dentro de cada
proyecto que estemos
desarrollando






