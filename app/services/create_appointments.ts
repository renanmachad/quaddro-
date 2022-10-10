import type { AppointmentI } from "~/interfaces/appointment";
import ValidatorAppointment from "~/utils/validator";
import {
    supabase
} from '../client/client';

export async function  CreateAppointments({title,schedule_start,schedule_end}:AppointmentI){    

    const { message, error:errorExist }=ValidatorAppointment({
        schedule_start,
        schedule_end
    });

   
    if(errorExist===true){
        return{
            errorExist,message
        }
    }

    const { data,error }= await supabase.from<AppointmentI>('appointments').insert({
        title,
        schedule_start,
        schedule_end
    });

    
    /**
     * Identifica errros do supabase,
     * código 23505 serve para caso não seja permitido valores repetidos,
     * coluna contém propriedade "unique"
     */
    if(error?.message && error?.code==='23505'){
        return{
            errorExist:true,
            message:'Agendamento já cadastrado!'
        }
    }


    return {data ,error:errorExist, message}; 
}