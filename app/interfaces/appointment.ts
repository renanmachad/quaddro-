export interface AppointmentI{
    id?:string;
    title?:string;
    created_at?:string;
    updated_at?:string;
    schedule_start?:string | Date;
    schedule_end?:string | Date;
    
    data?:string;
    error?:string | boolean;
    errorExist?:string | boolean;
    message?:string;
} 