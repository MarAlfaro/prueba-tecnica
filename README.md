# Proyecto de Prueba Técnica: Desarrollador Full Stack Junior

Este repositorio contiene el desarrollo de una prueba técnica para la posición de Desarrollador Full Stack Junior. El proyecto está dividido en dos partes principales:

### 1. **Backend (API REST):** 
Una API RESTful desarrollada con TypeScript y Node.js para la gestión de tareas.
    
### Descripción

Esta API permite gestionar tareas con operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Utiliza Node.js con Express y MongoDB.

### Requisitos

    - Node.js
    - MongoDB
    - npm o yarn

## Instalación y Ejecución

### Clona el repositorio

```bash
git clone "https://github.com/MarAlfaro/prueba-tecnica.git"
```
Accedemos a la carpeta principal

```bash
 cd prueba-tecnica
```
Luego a la carpeta donde tenemos la API
```bash
 cd backend
```
### Dependencias
Instala las dependencias necesarias con:
```bash
npm install
# o
yarn install

```
### Configura las variables de entorno
Crea un archivo .env con las siguientes variables de entorno:

```bash
MONGO_URI=mongodb://localhost:27017/tasksdb
PORT=5000
```

### Ejecuta la API
Para iniciar el servidor, usa:
```bash
npm start
# o
yarn start

```
La API estará disponible en http://localhost:5000.



2. **Frontend (Aplicación Web):** Una aplicación web responsiva desarrollada con React.js (o Vue.js/Nuxt.js) que consume la API para mostrar y gestionar las tareas.



