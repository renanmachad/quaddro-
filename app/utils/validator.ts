import { ValidatorI } from './../interfaces/validator';
import type { AppointmentI } from "~/interfaces/appointment";

export default function ValidatorAppointment<ValidatorI>({schedule_end,schedule_start}:AppointmentI){
    
    // pass the parameters to the validator as string
    const start= new Date(schedule_start as string).getTime();
    const end = new Date(schedule_end as string).getTime();

   
    /**
     * @description - A data final do agendamento não pode
     * - ser menor que a data inicial 
     * @if end < start
     * @return { message:"Agendamento inválido", error:true}
     * @return { message:STRING, error:Boolean}
     */
    if(end < start){
        return {
            error:true,
            message:"Início do agendamento menor que final do agendamento"
        }
    }

    if(end ===start){
        return{
            error:true,
            message:"Início e fim do agendamento possuem a mesma data"
        }
    }

    return {
        message:'Nenhum erro',
        error:false
    }
}