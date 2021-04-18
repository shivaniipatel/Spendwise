

import knex from 'knex';

const config = {
    client: 'pg',
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
    },
    pool: {
        min: 2,
        max: 10
    }
};

export default knex(config);