import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/** get all questions */
export const getQuestions = async (req, res) => {
    try {
        const questions = await Questions.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve questions", error: error.message });
    }
};

/** insert all questinos */
export const insertQuestions = async (req, res) => {
    try {
        await Questions.insertMany({questions, answers}); // Assuming questions is an array of question objects
        res.json({ message: "Data Saved Successfully...!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to save data", error: error.message });
    }
};

/** Delete all Questions */
export const dropQuestions = async (req, res) => {
    try {
        await Questions.deleteMany();
        res.json({ message: "Questions Deleted Successfully...!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete questions", error: error.message });
    }
};

/** get all result */
export const getResult = async (req, res) => {
    try {
        const results = await Results.find();
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve results", error: error.message });
    }
};

/** post all result */
export const storeResult = async (req, res) => {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username || !result) {
            throw new Error('Data Not Provided...!');
        }

        const newResult = await Results.create({ username, result, attempts, points, achieved });
        res.json({ message: "Result Saved Successfully...!", data: newResult });
    } catch (error) {
        res.status(400).json({ message: "Failed to save result", error: error.message });
    }
};

/** delete all result */
export const dropResult = async (req, res) => {
    try {
        await Results.deleteMany();
        res.json({ message: "Result Deleted Successfully...!" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete results", error: error.message });
    }
};