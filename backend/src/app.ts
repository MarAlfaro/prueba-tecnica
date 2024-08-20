import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import taskRoutes from './routes/taskRoutes';

// Carga las variables de entorno desde un archivo .env
dotenv.config();  

// Inicializa la aplicación Express
const app = express();

// Habilita CORS para permitir solicitudes desde otros dominios
app.use(cors());  

// Middleware para analizar las solicitudes JSON
app.use(express.json());  

// Conexión a la base de datos MongoDB
connectDB(); 

// Define las rutas para las operaciones de tareas
app.use('/api/tasks', taskRoutes);  

export default app;  
