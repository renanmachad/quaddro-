import type { AppointmentI } from './appointment';


export default interface SearchI{
    data?:AppointmentI[] | null;
    error?:boolean,
    message?:string
}