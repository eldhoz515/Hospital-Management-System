import { db } from '$lib/mysql';

export async function load() {
    const [rows,fields]=await db.promise().query(`select * from inventory order by quantity`);    
    console.log(rows);
    return {rows};
}

export const actions = {
    default: async (event) => {
        let success;
        const data = await event.request.formData();
        console.log(data);
        const item_name = data.get('item_name');
        const quantity = data.get('quantity');
        const supplier = data.get('supplier');
        const cost = data.get('cost');
        const query = `INSERT INTO inventory (item_name, quantity, supplier, cost) VALUES (?, ?, ?, ?)`;
        const values = [item_name, quantity, supplier, cost];
        await db.promise().query(`delete from inventory where item_name='${item_name}'`);
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