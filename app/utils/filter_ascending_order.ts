import type { AppointmentI } from '../interfaces/appointment';
import ListAppointments from '../services/list_appointments';


// Ordem crescente é A -B 
export default async function FilterAscendingOrder(){
    const {data,error } = await ListAppointments();
   
    const ascending_list= data?.sort((a,b)=>{
        return new Date(a.schedule_start!).getTime() - new Date(b.schedule_start!).getTime();
    });

   

    return ascending_list
}