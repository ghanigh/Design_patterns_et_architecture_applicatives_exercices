import { Sequelize } from "sequelize";

const connection = new Sequelize(
  'martinique', // Nom de la base de donnÃ©e
  'root', // identifiant Mysql
  '', // Mot de passe Mysql
  {
      host: 'localhost', // URL de mySQL
      dialect: 'mysql'
  }
);

try {
  await connection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default connection;