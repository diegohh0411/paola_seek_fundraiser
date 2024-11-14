import type { APIRoute } from "astro";
import { sql } from '../../lib/neon.ts';
import { db_username } from "../../customized/consts.ts";

export const prerender = false;

export const GET: APIRoute = async () => {
    try {
        const raised_query = await sql`SELECT * FROM raised WHERE username = ${db_username};`;
        const ahorros = raised_query.filter(r => r.type === 'ahorro').map(r => r.amount);
        const donaciones = raised_query.filter(r => r.type === 'donacion').map(r => r.amount);

        return new Response(JSON.stringify({ ahorros, donaciones }), {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
