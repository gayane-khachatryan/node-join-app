import pool from "../../db.js";

export async function getPayments() {
    const [rows] = await pool.query(`
        SELECT * FROM payments
    `);
    return rows;
}

export async function insertPayment(data) {

    const { student_id, amount, month } = data;

    const [result] = await pool.query(`
        INSERT INTO payments (student_id, amount, month)
        VALUES (?, ?, ?)
    `, [student_id, amount, month]);

    return result.insertId;
}


export async function deletePayment(id) {

    await pool.query(`
        DELETE FROM payments
        WHERE id = ?
    `, [id]);
}