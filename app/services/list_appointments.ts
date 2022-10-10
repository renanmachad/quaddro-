import { supabase } from "~/client/client";
import { AppointmentI } from "~/interfaces/appointment";


export default async function ListAppointment() {
    
   const response= await supabase.from<AppointmentI>('appointments').select('*');


   return response;
}