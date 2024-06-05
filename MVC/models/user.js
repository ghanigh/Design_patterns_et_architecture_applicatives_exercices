import db from '../config/db'

const User = {}

User.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users`, (err, res) => {
            return resolve(res)
        })
    })
}

User.post = () => {

}

export default User;