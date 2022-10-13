import { supabase } from "~/client/client";
import type { AppointmentI } from "~/interfaces/appointment";


export default async function ListAppointment() {
    
   const response= await supabase.from<AppointmentI>('appointments').select('*');

  
   return response;
}