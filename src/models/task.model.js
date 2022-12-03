import pool from "../helpers/conexion";

const getTareasPorHacer = async () => {
    const sql = await pool.query(`
        SELECT
            tareas.id, tareas.titulo, tareas.descripcion,
            estado_tareas.cod_estado, estado_tareas.nombre_estado
        FROM tareas
            INNER JOIN estado_tareas ON estado_tareas.id = tareas.id_estado
        WHERE estado_tareas.cod_estado IN ('TPH')
        ORDER BY 1 DESC;
    `);

    return sql[0]
}

const getDetalleTarea = async (data) => {
    const sql = await pool.query(`
        SELECT
            tareas.titulo, tareas.descripcion
        FROM tareas
        WHERE id = ?;
    `, [data.id_tarea]);

    return sql[0]
}

const getTareasEnProceso = async () => {
    const sql = await pool.query(`
        SELECT
            tareas.id, tareas.titulo, tareas.descripcion,
            estado_tareas.id as id_estado, estado_tareas.nombre_estado
        FROM tareas
            INNER JOIN estado_tareas ON estado_tareas.id = tareas.id_estado
        WHERE estado_tareas.cod_estado IN ('EP')
        ORDER BY 1 DESC;
    `);

    return sql[0]
}

const getTareasRealizadas = async () => {
    const sql = await pool.query(`
        SELECT
            tareas.id, tareas.titulo, tareas.descripcion,
            estado_tareas.cod_estado, estado_tareas.nombre_estado
        FROM tareas
            INNER JOIN estado_tareas ON estado_tareas.id = tareas.id_estado
        WHERE estado_tareas.cod_estado IN ('R')
        ORDER BY 1 DESC;
    `);

    return sql[0]
}

const insertToHistory = async (data) => {

    const sql = await pool.query(
        `
            INSERT INTO historial_tareas (estado_anterior, estado_actual, id_tarea)
            VALUES (?, ?, ?);
        `, [data?.before, data?.current, data.id_tarea]
    );

    return sql[0];
}

const changeState = async (data) => {
    const sql = await pool.query(`
        UPDATE crud_sencillo.tareas t
        SET t.id_estado = ?
        WHERE t.id = ?;
    `, [data.id_estado, data.id_tarea]);

    return sql[0];
}

const createTarea = async (data) => {
    const sql = await pool.query(
        `
            INSERT INTO tareas (titulo, descripcion, id_estado)
            VALUES (?, ?, 1);
        `, [data.title, data.description]
    );

    return sql[0];
}

const updateTarea = async (data) => {
    const sql = await pool.query(
        `
            UPDATE crud_sencillo.tareas t
            SET t.titulo      = ?,
                t.descripcion = ?
            WHERE t.id = ?;
        `, [data.title, data.description, data.id_tarea]
    );

    return sql[0];
}

const deleteTarea = async (data) => {
    const sql = await pool.query(
        `
            DELETE
            FROM crud_sencillo.tareas
            WHERE id = ?;
        
        `, [data.id_tarea]
    );

    return sql[0];
}

export {
    getTareasPorHacer,
    getTareasEnProceso,
    getTareasRealizadas,
    getDetalleTarea,

    insertToHistory,
    changeState,

    createTarea,
    updateTarea,
    deleteTarea,
    
}