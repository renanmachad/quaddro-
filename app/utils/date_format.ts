/**
 * @description - Porquê não usei a biblioteca date fns aqui?
 * Porquê a mesma quando formatada retornava uma diferença de 1/2 horas
 * com o horário de fato registrado, ao invés de ficar resolvendo problemas e conversões da
 * biblioteca, formetei eu mesmo para tal fim já que o objetivo 
 * da formatação aqui é apenas visualizar a hora em determinado formato;
 * função que causava discrepância de horas:
 * @function  return format(parseISO(date),'dd-MM-yyyy HH:mm').split('-').join('/')
 * 
 * @param date 
 * @returns date in this format dd/mm/yyyy HH:mm
 */

export default function FormatDate(date:any){
   const new_date = date.split('T')[0].split('-').reverse().join('/');
   
   const hours = date.split('T')[1].split(':')[0];
   const min = date.split('T')[1].split(':')[1];


   
   return `${new_date} ${hours}:${min}`;
}