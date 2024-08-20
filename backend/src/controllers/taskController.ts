import { Request, Response, NextFunction } from 'express';
import Task from '../models/taskModel';

// Controladores para gestionar las tareas (CRUD: Crear, Leer, Actualizar, Eliminar)

// Obtener todas las tareas
export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Recupera todas las tareas de la base de datos
    const tasks = await Task.find();  
    // Envía la lista de tareas en formato JSON
    res.json(tasks);  
  } catch (error) {
    // Manejo de errores al intentar obtener las tareas
    next({ statusCode: 500, message: 'Error al obtener las tareas' });
  }
};

// Crear una nueva tarea
export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Crea una nueva tarea con los datos recibidos
    const task = new Task(req.body);  
    // Guarda la tarea en la base de datos
    const savedTask = await task.save();  
    // Devuelve la tarea creada con un código de estado 201
    res.status(201).json(savedTask);  
  } catch (error) {
    // Manejo de errores al intentar crear una tarea
    next({ statusCode: 400, message: 'Error al crear la tarea' });
  }
};

// Actualizar una tarea existente
export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      // Devuelve el documento actualizado
      new: true, 
      // Ejecuta validaciones definidas en el modelo
      runValidators: true, 
    });

    if (!updatedTask) {
      return next({ statusCode: 404, message: 'Tarea no encontrada' });
    }
    // Devuelve la tarea actualizada
    res.json(updatedTask);  
  } catch (error) {
    // Manejo de errores al intentar actualizar una tarea
    next({ statusCode: 400, message: 'Error al actualizar la tarea' });
  }
};

// Eliminar una tarea existente
export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    // Elimina la tarea de la base de datos
    const deletedTask = await Task.findByIdAndDelete(id);  

    if (!deletedTask) {
      return next({ statusCode: 404, message: 'Tarea no encontrada' });
    }
    // Confirma la eliminación exitosa
    res.json({ message: 'Tarea eliminada con éxito' });  
  } catch (error) {
    // Manejo de errores al intentar eliminar una tarea
    next({ statusCode: 500, message: 'Error al eliminar la tarea' });
  }
};
