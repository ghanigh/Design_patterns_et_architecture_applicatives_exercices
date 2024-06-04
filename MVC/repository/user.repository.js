import User from '../models/user.model'
import connection from '../config/database'

User(connection, Sequelize);
export const find = () => {
// Requête qui faut return
}