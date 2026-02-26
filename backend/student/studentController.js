
import {getInnerJoin,getLeftJoin,getRightJoin,getStudentSummary} from "../src/model/studentModel.js";

export const getJoinData = async (req, res) => {
    try {
        const { type } = req.params;
        let data;

        if (type === "inner") data = await getInnerJoin();
        if (type === "left") data = await getLeftJoin();
        if (type === "right") data = await getRightJoin();

        res.json( data );

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getSummary = async (req, res) => {
    try {
        const data = await getStudentSummary();
        res.json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};