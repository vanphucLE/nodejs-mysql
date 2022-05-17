import mysql from 'mysql2/promise';
import config from '../db-config';

export const query = async (sql, params) => {
  const connection = await mysql.createConnection(config.db);
  const [results] = await connection.execute(sql, params);

  return results;
};
