
import {useState,useEffect} from 'react';
import FormatDate from '~/utils/date_format';
import type { AppointmentI } from '~/interfaces/appointment';
import ContainerCenter from '../Container';
import DeleteButton from '../ButtonDelete/indext';


const  ListComponent=({content}:any)=>{
    
    /**
     * Salvei o conteúdo que vem das props em um state
     * porquê eu vou precisar filtra-los
     * ou seja assim eu posso atualizar o estado da lista
     */
    const [list,setList] = useState<AppointmentI[]>(content);

    useEffect(()=>  {
        setList(content);
    },[content])

    
    return(
        <>
        {list?.length===0 ? (
            <ContainerCenter>
                <p className='text-xl text-white'>
                    Nenhum agendamento encontrado !
                </p>
            </ContainerCenter>
        ):
        <>
      
        <div className='overflow-x-auto relative pt-10 h-full min-h-screen'>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Identificador
                        </th>
                        <th className="px-6 py-3">
                            Título
                        </th>
                        <th className="px-6 py-3">
                            Início agendamento
                        </th>
                        <th className="px-6 py-3">
                            Fim agendamento
                        </th>
                        <th className="px-6 py-3">
                            Criado em
                        </th>
                        <th className="px-6 py-3">
                            Excluir agendamento
                        </th>
                    </tr>
                </thead>
                <tbody>
               
                {list?.map((content:AppointmentI)=>{
                    return(
                        <tr key={content.id} className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700">
                            <th key={content.id} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {content.id}
                            </th>
                          
                            <td className="px-6 py-4">
                                {content.title}
                            </td>
                            <td className="px-6 py-4">
                                {FormatDate(content.schedule_start!)}
                            </td>
                            <td className="px-6 py-4">
                                {FormatDate(content.schedule_end!)}
                            </td>
                            <td className="px-4 py-6">
                                {FormatDate(content.created_at!)}
                            </td>
                            <td className='px-4 py-6'>
                                <DeleteButton id={content.id}/>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        </>
    }
        </>
    )

}

export default ListComponent;