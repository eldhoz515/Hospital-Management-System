import { db } from '$lib/mysql';

export async function load() {
    const [rows, fields] = await db.promise().query(`select * from staffs`);
    console.log(rows);
    return { rows };
}

export const actions = {
    default: async (event) => {
        let success;
        const data = await event.request.formData();
        console.log(data);
        const staff_name = data.get('staff_name');
        const staff_id = data.get('staff_id');
        const staff_dept = data.get('department');
        const staff_dob = data.get('staff_dob');
        const staff_phone = data.get('staff_phone');
        const staff_email = data.get('staff_email');
        const staff_address = data.get('staff_address');
        const query = `INSERT INTO staffs (name,id,dept, dob, phone, email, address) VALUES (?,?,?, ?, ?, ?, ?)`;
        const values = [staff_name, staff_id, staff_dept, staff_dob, staff_phone, staff_email, staff_address];
        const [rows, fields] = await db.promise().query(`update staffs set name='${staff_name}',dept='${staff_dept}', dob='${staff_dob}',phone='${staff_phone}',email='${staff_email}',address='${staff_address}' where id='${staff_id}'`);
        if (rows.affectedRows > 0)
            return { success: true };
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