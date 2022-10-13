import ListAppointments from '../services/list_appointments';


/**
 * O método sorte
 * @returns AppointmentI {interface}
 */
export async function FilterAlphabeticalTitle(){
    const {  data,error}= await ListAppointments();


    return data?.sort((a,b)=>{
        if(a.title! < b.title!) return -1;
        
        if(a.title! > b.title!) return 1;

        return 0;
    });

    
}