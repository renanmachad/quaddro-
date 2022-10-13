import { supabase } from '~/client/client';
import type { AppointmentI } from '~/interfaces/appointment';

export async function ValidateRangeAppointment(new_start:string){
    const { data ,error}= await  supabase.from<AppointmentI>('appointments').select('schedule_start,schedule_end');
    
    let error_exist;
    const new_hour= new Date(new_start).getTime();

    if(data?.length ===0){
        return {
            valid:false
        }
    }

    data?.map((hours,index)=>{
        const start = new Date(hours.schedule_start as string).getTime() ;
        const end = new Date(hours.schedule_end as string).getTime()
      
        if(new_hour >= start && new_hour <= end){
         
            error_exist= true;
            return{
                valid:true,
                alert:'Agendamento em andamento neste horário'
            }
        } else {
            error_exist=false;
            return{
                valid:false,
                alert:'Agendamento válido'
            }
        }
    });

    if(error_exist===true){
        return {
            valid:true,
            alert:'Agendamento em andamento neste horário'
        }
    } 
    return {
        valid:false
    }



}