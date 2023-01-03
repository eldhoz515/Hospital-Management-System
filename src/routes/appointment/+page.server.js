import { db } from '$lib/mysql';

export async function load() {
    const [rows, fields] = await db.promise().query(`select * from appointments where appointment_date = "${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}" order by appointment_time`);
    // console.log(rows);
    return { rows };
}

export const actions = {
    default: async (event) => {
        let success;
        const data = await event.request.formData();
        console.log(data);
        const patient_id = data.get('patient_id');
        const appointment_date = data.get('appointment_date');
        const appointment_time = data.get('appointment_time');
        const doctor_id = data.get('doctor_id');
        const appointment_reason = data.get('appointment_reason');
        const query = `INSERT INTO appointments (patient_id, appointment_date, appointment_time, doctor_id, appointment_reason) VALUES (?, ?, ?, ?, ?)`;
        const values = [patient_id, appointment_date, appointment_time, doctor_id, appointment_reason];
        try {
            await db.promise().query(query, values);
            success = true;
        }
        catch(e) {
            console.log(e)
            success = false;
        }
        return { success: success };

    }
};