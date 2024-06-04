import User from '../models/user.model'
import connection from '../config/database'
import { Sequelize } from 'sequelize'

User(connection, Sequelize);

const { User } = connection.models

// RELATIONS