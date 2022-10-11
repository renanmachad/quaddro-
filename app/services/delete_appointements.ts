import { supabase } from "~/client/client";
import { AppointmentI } from "~/interfaces/appointment";

export async function DeleteAppointments({id}:AppointmentI){
   
        const {data, error }=await supabase.from<AppointmentI>('appointments').delete().match({
            id:id
        });

        if(error?.code ){
            return {
                error:true,
                data
            }
        }
        return {data, error:false}

}