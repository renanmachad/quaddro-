import type { AppointmentI } from "~/interfaces/appointment";
import { ValidateRangeAppointment } from "~/utils/validate_range";
import ValidatorAppointment from "~/utils/validator";
import {
    supabase
} from '../client/client';

export async function  CreateAppointments({title,schedule_start,schedule_end}:{
    title:string,
    schedule_start:string,
    schedule_end:string
}){    


    const { message, error:errorExist }= ValidatorAppointment(schedule_start,schedule_end);

    const {valid, alert}= await ValidateRangeAppointment(schedule_start);

    if(valid===true){
        return {
            errorExist:valid,
            message:alert
        }
    }
    
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