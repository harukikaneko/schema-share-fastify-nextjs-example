import pg from 'pg';

export const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  user: 'fastify',
  password: 'password',
  database: 'example',
});
