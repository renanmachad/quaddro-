import { supabase } from "~/client/client";
import { AppointmentI } from "~/interfaces/appointment";

export async function DeleteAppointments({id}:AppointmentI){
        console.log(id)
        const {data, error }=await supabase.from<AppointmentI>('appointments').delete().match({
            id:id
        });
        console.log(error)
        if(error?.code ){
            return {
                error:true,
                data
            }
        }
        return {data, error:false}

}