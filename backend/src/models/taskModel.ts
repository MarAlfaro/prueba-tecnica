import { Schema, model } from 'mongoose';

// Definición del esquema de la tarea en MongoDB
const taskSchema = new Schema({
  // Título de la tarea, obligatorio
  title: { type: String, required: true },  
  // Descripción de la tarea, opcional
  description: { type: String },  
  // Estado de la tarea, con valores posibles y por defecto 'pending'
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },  
  // Fecha de creación, por defecto es la fecha actual
  createdAt: { type: Date, default: Date.now },  
});

// Creación del modelo de tarea basado en el esquema definido
const Task = model('Task', taskSchema);

export default Task;

