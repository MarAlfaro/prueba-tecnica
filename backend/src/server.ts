import app from './app';

// Define el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 5000;  

// Inicia el servidor y lo pone a escuchar en el puerto definido
app.listen(PORT, () => {
   // Muestra un mensaje en la consola indicando que el servidor está en funcionamiento
  console.log(`Server running: http://localhost:${PORT}/api/tasks`); 
});
