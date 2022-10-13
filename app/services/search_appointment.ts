import { supabase } from "~/client/client";
import type SearchI from "~/interfaces/search";
import type { AppointmentI } from './../interfaces/appointment';


export default async function SearchAppointment(title?:string| undefined | null): Promise<SearchI[] | SearchI>{
    const { data,  error} = await supabase.from<AppointmentI>('appointments').select('*').eq('title', `${title!}`);
    
    console.log(data,error)

    return{
       
        data:data
    }
}