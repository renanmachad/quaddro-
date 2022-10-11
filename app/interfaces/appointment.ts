export interface AppointmentI{
    id?:string;
    title?:string;
    created_at?:string;
    updated_at?:string;
    schedule_start:string ;
    schedule_end:string ;
    appointments:AppointmentI[] | AppointmentI;
    data?:string | AppointmentI[];
    error?:boolean | string;
    errorExist?:string | boolean;
    message?:string;
} 