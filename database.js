// yarn add pg

const Pool = require('pg').Pool;

// 1 - Abrir a conexão
// 2 - Executar o comando SQL (query, insert) 30ms (índice)
// 3 - Fechar a conexão

const pool = new Pool({
    user: 'pbbkfduvvajvtv',
    password: 'a4d4206862b3d68e55fb4735804fd165acbf23344f211ddb76d4e74bb5285b12',
    host: 'ec2-34-200-72-77.compute-1.amazonaws.com',
    database: 'dajio132vbf7eo',
    port: 5432,
    ssl: { rejectUnauthorized: false}
});
/*
const sql = `
    CREATE TABLE IF NOT EXISTS tarefas
    (
        ID serial primary key,
        nome varchar(200) not null,
        done boolean
    )
`;

pool.query(sql,(error, result) => {
    if (error) 
        throw error 
    
    console.log('Tabela criada com sucesso!')
    
})

//INSERT
const sql_insert = `
    INSERT INTO tarefas(nome, done) 
        VALUES
            ('Estudar para prova', false),
            ('Estudar mais ainda para prova', false),
            ('Fazer churrasco', true)
`;

pool.query(sql_insert, function(error, result) {
    if(error)
        throw error;

    console.log(result.rowCount);
})
*/
//SELECT
const sql_select = `SELECT * FROM tarefas`

pool.query(sql_select, function(error, result) {
    if(error)
        throw error;

        console.log(result.rows);
})