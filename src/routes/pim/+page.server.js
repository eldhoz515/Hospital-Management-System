import { db } from '$lib/mysql';

export async function load() {
    const [rows, fields] = await db.promise().query(`select * from patients`);
    console.log(rows);
    return { rows };
}

export const actions = {
    default: async (event) => {
        let success;
        const data = await event.request.formData();
        console.log(data);
        const patient_name = data.get('patient_name');
        const patient_id = data.get('patient_id');
        const patient_dob = data.get('patient_dob');
        const patient_phone = data.get('patient_phone');
        const patient_email = data.get('patient_email');
        const patient_address = data.get('patient_address');
        const query = `INSERT INTO patients (name,id, dob, phone, email, address) VALUES (?,?, ?, ?, ?, ?)`;
        const values = [patient_name, patient_id, patient_dob, patient_phone, patient_email, patient_address];
        const [rows, fields] = await db.promise().query(`update patients set name='${patient_name}',dob='${patient_dob}',phone='${patient_phone}',email='${patient_email}',address='${patient_address}' where id='${patient_id}'`);
        if (rows.affectedRows > 0)
            return { success: true };
        try {
            await db.promise().query(query, values);
            success = true;
        }
        catch {
            console.log('error')
            success = false;
        }

        return { success: success };
    }
};