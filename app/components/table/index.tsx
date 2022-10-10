
import type { LinksFunction } from '@remix-run/node';
import type  { ChildrenI } from '~/interfaces/childrenType';
import {format, parseISO} from 'date-fns';
import FormatDate from '~/utils/date_format';
import { AppointmentI } from '~/interfaces/appointment';
// const  ListComponent: React.FC<ChildrenI>=({children,content}:any)=>{
const  ListComponent=({content}:any)=>{
  
   
    return(
        <div className='overflow-x-auto relative'>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Identificador
                        </th>
                        <th className="py-3 px-6">
                            Título
                        </th>
                        <th className="py-3 px-6">
                            Início agendamento
                        </th>
                        <th className="py-3 px-6">
                            Fim agendamento
                        </th>
                        <th className="py-3 px-6">
                            Atualizado em
                        </th>
                        <th className="py-3 px-6">
                            Criado em
                        </th>
                    </tr>
                </thead>
                <tbody>
                {content?.map((content:AppointmentI)=>{
                    return(
                        <tr key={content.id} className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700">
                             <th key={content.id} scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {content.id}
                            </th>
                            <td className="py-4 px-6">
                                {content.title}
                            </td>
                            <td className="py-4 px-6">
                                {FormatDate(content.schedule_start)}
                            </td>
                            <td className="py-4 px-6">
                                {FormatDate(content.schedule_end)}
                            </td>
                            <td className="py4-px-6">
                                {FormatDate(content.updated_at)}
                            </td>
                            <td className="py-4 px-6">
                                {FormatDate(content.created_at)}
                            </td>
                        </tr>
                    )
                })}
                
                   
               
        
           
        </tbody>
            </table>
        </div>
    )

}

export default ListComponent;