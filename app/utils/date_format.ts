import { parseISO, format} from 'date-fns';

/**
 * 
 * @param date 
 * @returns date in this format dd/mm/yyyy HH:mm
 */

export default function FormatDate(date:string){
    return format(parseISO(date),'dd-MM-yyyy HH:mm').split('-').join('/')
}