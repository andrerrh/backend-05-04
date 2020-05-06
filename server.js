const express = require('express');
const Pool = require('pg').Pool;

const server = express();
server.use(express.json());

const pool = new Pool({
    user: 'pbbkfduvvajvtv',
    password: 'a4d4206862b3d68e55fb4735804fd165acbf23344f211ddb76d4e74bb5285b12',
    host: 'ec2-34-200-72-77.compute-1.amazonaws.com',
    database: 'dajio132vbf7eo',
    port: 5432,
    ssl: { rejectUnauthorized: false}
});


server.get('/tarefa', async function(request, response) {
    const result = await pool.query('SELECT * FROM tarefas');
    return response.json(result.rows);
})

server.post('/tarefa', async function(request, response) {
    const nome = request.body.nome; // JSON

    const sql = `INSERT INTO tarefas (nome, done) VALUES ($1, $2)`

    await pool.query(sql, [nome, true]);

    return response.status(204).send()
})

// to-do: Fazer o put(update)

server.listen(process.env.PORT || 3000);