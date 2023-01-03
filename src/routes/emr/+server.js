import { db } from '$lib/mysql';

export async function GET({ url }) {
    try {
        const id = url.searchParams.get('id');
        console.log(id);
        if (id != 'undefined') {
            const [rows, fields] = await db.promise().query(`select * from medical_records where patient_id='${id}'`);
            console.log(rows);
            return new Response(JSON.stringify(rows));
        }
        return new Response('');
    }
    catch {
        return new Response('');
    }
}