import { getUserById } from '../repository/';
import User from '../models/user';

export const get = async (req, res) => {
    try {
        const userId = req.params.id;
        const response = await getUserById(userId);
        res.status(201).json({ user: response });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};
