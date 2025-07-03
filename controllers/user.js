import User from "../models/User.js";

export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted.");
    }
    catch (err) {
        next(err);
    }
}
export const updatedUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser);
    }
    catch (err) {
        next(err);
    }
}
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user);
    }
    catch (err) {
        next(err);
    }
}
export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find().lean();
        const transformedUsers = users.map(user => ({
            id: user._id,
            ...user
        }));
        res.status(200).json(transformedUsers);
    } catch (err) {
        next(err);
    }
}