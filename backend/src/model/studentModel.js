import pool from "../../db.js";

export async function getInnerJoin() {
    const [rows] = await pool.query(`
        SELECT students.id,
               students.name,
               students.group,
               payments.amount,
               payments.month
        FROM students
        INNER JOIN payments
            ON students.id = payments.student_id
    `);
    return rows;
}

export async function getLeftJoin() {
    const [rows] = await pool.query(`
        SELECT students.id,
               students.name,
               students.group,
               payments.amount,
               payments.month
        FROM students
        LEFT JOIN payments
            ON students.id = payments.student_id
    `);
    return rows;
}

export async function getRightJoin() {
    const [rows] = await pool.query(`
        SELECT students.id,
               students.name,
               students.group,
               payments.amount,
               payments.month
        FROM students
        RIGHT JOIN payments
            ON students.id = payments.student_id
    `);
    return rows;
}


export async function getStudentSummary() {
    const [rows] = await pool.query(`
        SELECT 
            students.id,
            students.name,
            students.group,
            COUNT(payments.id) AS total_payments,
            IFNULL(SUM(payments.amount), 0) AS total_amount,
            CASE 
                WHEN COUNT(payments.id) = 0 THEN 'unpaid'
                ELSE 'paid'
            END AS status
        FROM students
        LEFT JOIN payments
            ON students.id = payments.student_id
        GROUP BY students.id, students.name, students.group
    `);

    return rows;
}