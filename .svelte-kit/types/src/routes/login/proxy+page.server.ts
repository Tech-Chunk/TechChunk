// @ts-nocheck
import type { Actions } from './$types';
import { redirect } from "@sveltejs/kit"

export const actions = {
    default: async ({locals, request}: import('./$types').RequestEvent) => {
        const data = Object.fromEntries(await request.formData()) as {
            email: string;
            password: string;
        
        };

        try {
            await locals.pb.collection('users').authWithPassword(data.email, data.password);
        } catch (e){
            console.error(e);
            throw e;
        }
           
        throw redirect(300, "/");
    }
};

;null as any as Actions;