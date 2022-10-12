import { ValidatorI } from './../interfaces/validator';
import type { AppointmentI } from "~/interfaces/appointment";


export default  function ValidatorAppointment<ValidatorI>(schedule_end:string,schedule_start:string){
    
    // pass the parameters to the validator as string
    const start= new Date(schedule_start as string).getTime();
    const end = new Date(schedule_end as string).getTime();

    
    /**
     * @description - A data final do agendamento não pode
     * - ser menor que a data inicial 
     * @if end < start
     * @return { message:'Início do agendamento menor que final do agendamento', error:true}
     * @return { message:STRING, error:Boolean}
     */
    if(end > start){
        return {
            error:true,
            message:"Início do agendamento menor que final do agendamento"
        }
    }


    // Outra verificação para identificação de erro mais clara
    // se eu apenas verificasse usando >= eu não saberia
    // se as datas eram maior que o esperado, ou igual.

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