import { Router } from "express";
import * as taskController from "../controllers/task.controller";

const router = Router();

router.get('/tareas-por-hacer', taskController.getTareasPorHacer);
router.get('/tareas-en-proceso', taskController.getTareasEnProceso);
router.get('/tareas-realizadas', taskController.getTareasRealizadas);
router.get('/tarea/:id', taskController.getDetalleTarea);

router.post('/crear', taskController.createTarea);

router.put('/cambiar-estado', taskController.changeState);
router.put('/actualizar', taskController.updateTarea);

router.delete('/eliminar', taskController.deleteTarea);

export default router