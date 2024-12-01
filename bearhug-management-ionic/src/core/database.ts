import { open } from "sqlite";
import sqlite3 from "sqlite3";

// Configuración de la conexión a la base de datos SQLite
export const connectToDatabase = async () => {
  return open({
    filename: "./database.sqlite",
    driver: sqlite3.Database,
  });
};
