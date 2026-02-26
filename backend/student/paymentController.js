import {getPayments,insertPayment,deletePayment} from "../src/model/paymentModel.js";


export const getAllPayments = async (req, res) => {
    try {

        const payments = await getPayments();

        res.json({ payments });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const addPayment = async (req, res) => {
    try {

        const { student_id, amount, month } = req.body;

        const insertId = await insertPayment({
            student_id,
            amount,
            month
        });

        res.json({
            id: insertId,
            student_id,
            amount,
            month
        });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const removePayment = async (req, res) => {
    try {

        const { id } = req.params;

        await deletePayment(id);

        res.json({ message: "Payment deleted" });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};