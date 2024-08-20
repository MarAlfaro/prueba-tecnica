import { Router } from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController';

// Configuración del enrutador para las rutas relacionadas con las tareas
const router = Router();

// Rutas para operaciones CRUD en las tareas
// Obtener todas las tareas
router.get('/', getTasks);    
// Crear una nueva tarea  
router.post('/', createTask);  
// Actualizar una tarea existente por ID 
router.put('/:id', updateTask); 
// Eliminar una tarea existente por ID
router.delete('/:id', deleteTask); 


export default router;
