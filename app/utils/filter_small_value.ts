import type { AppointmentI } from '../interfaces/appointment';


// Filtra a menor data de início para a maior
// transformando a data em milisegundos e utilizando a função sort 

export default function FilterSmallValue(appointments: AppointmentI[]){
    return appointments.sort(function(a, b) {
        return new Date(a.schedule_start).getTime() - new Date(b.schedule_start).getTime();
    });
}