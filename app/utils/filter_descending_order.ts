import type { AppointmentI } from '../interfaces/appointment';
import  ListAppointments from '../services/list_appointments';



// Filtra a menor data de início para a maior
// transformando a data em milisegundos e utilizando a função sort 
// ordem decrescente é B - A
export default async  function FilterDescendingOrder(){
    const { data, error} = await ListAppointments();


    const descending_list = data?.sort((a,b)=>{
        return new Date(b.schedule_start!).getTime() - new Date(a.schedule_start!).getTime();
    })

    
    
    return descending_list
}   
/**
 * 
 *    
    */
