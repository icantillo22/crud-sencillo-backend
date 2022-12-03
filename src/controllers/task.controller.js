import * as taskModel from "../models/task.model"

const getTareasPorHacer = async (req, res) => {
    const request = await taskModel.getTareasPorHacer()
    return res.json({data: request}) 
}

const getTareasEnProceso = async (req, res) => {
    const request = await taskModel.getTareasEnProceso()
    return res.json({data: request}) 
}

const getTareasRealizadas = async (req, res) => {
    const request = await taskModel.getTareasRealizadas()
    return res.json({data: request}) 
}

const getDetalleTarea = async (req, res) => {
    const request = await taskModel.getDetalleTarea({id_tarea: parseInt(req.params.id)})
    return res.json({data: request}) 
}

const changeState = async (req, res) => {
    const { data } = req.body

    const request = await taskModel.changeState(data)
    await taskModel.insertToHistory({
        id_tarea: data.id_tarea,
        before: data.before,
        current: data.id_estado
    });

    return res.json({data: request}) 
}

const createTarea = async (req, res) => {
    const { data } = req.body

    const request = await taskModel.createTarea(data)
    await taskModel.insertToHistory({
        id_tarea: request.insertId,
        current: data.id_estado
    })

    return res.json({data: request}) 
}

const updateTarea = async (req, res) => {
    const { data } = req.body

    const request = await taskModel.updateTarea(data)    

    return res.json({data: request}) 
}

const deleteTarea = async (req, res) => {
    const { data } = req.body

    const request = await taskModel.deleteTarea(data)

    return res.json({data: request}) 
}

export {
    getTareasPorHacer,
    getTareasEnProceso,
    getTareasRealizadas,
    getDetalleTarea,

    createTarea,
    updateTarea,
    deleteTarea,

    changeState,
}