import { supabase } from '~/client/client';
import type { AppointmentI } from '~/interfaces/appointment';
import  FormatDate  from '../utils/date_format';

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
        
        console.log(`Hora para verificar:${FormatDate(new_start)}`);
        console.log(`Hora inicial do range :${FormatDate(hours.schedule_start)}`)
        console.log(`Hora final do range: ${FormatDate(hours.schedule_end)}`)
        if(new_hour >= start && new_hour <= end){
            console.log('⛔️ date is between the 2 dates');
            error_exist= true;
            return{
                valid:true,
                alert:'Agendamento em andamento neste horário'
            }
        } else {
            error_exist=false;
            console.log(`✅ date is not in the range: init ${FormatDate(hours.schedule_start)} end ${FormatDate(hours.schedule_end)}`);
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