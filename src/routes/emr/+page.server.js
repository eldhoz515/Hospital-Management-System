import { db } from '$lib/mysql';

export const actions = {
    default: async (event) => {
        let success;
        const data = await event.request.formData();
        console.log(data);
        const patient_id = data.get('patient_id');
        const diagnosis = data.get('diagnosis');
        const treatment = data.get('treatment');
        const test_results = data.get('test_results');
        const query = `INSERT INTO medical_records(patient_id, diagnosis, treatment, test_results) VALUES (?, ?, ?, ?)`;
        const values = [patient_id, diagnosis, treatment, test_results];
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