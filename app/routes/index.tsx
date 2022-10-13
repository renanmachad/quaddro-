import { useEffect,useState } from "react";
import type { AppointmentI } from "~/interfaces/appointment";
import ContainerCenter from "~/components/Container";
import  ListComponent  from '../components/table/index';
import ListAppointment from "~/services/list_appointments";
import  Loading from '../components/loading/index';
import { useNavigate } from "@remix-run/react"
import FilterAscendingOrder from "~/utils/filter_descending_order";
import FilterDescendingOrder from "~/utils/filter_ascending_order";
import { FilterAlphabeticalTitle } from "~/utils/alphabetical_order";


export default function Index() {
  //const { appointments, error } = useLoaderData<AppointmentI>()
 const [appointments,setAppointments]= useState<AppointmentI[]| null>();
 const[error,setError]= useState<any>('');
 let navigate = useNavigate()

  useEffect(()=>{
    async function Load(){
      const {data, error}=await  ListAppointment();
      setAppointments(data);
      if(error) setError(error)
     
    } 
    Load();
  },[]);

  async function UpdateAscending(){
    setAppointments(await FilterAscendingOrder())
    
  }
  async function UpdateDescending(){
    setAppointments( await FilterDescendingOrder())
     
  }

  async function AlphabeticalTitle(){
      setAppointments( await FilterAlphabeticalTitle());
  }
  return (
    <ContainerCenter>
      
      {error &&(
        <div>
          <p>
            Um erro ocorreu!
          </p>
        </div>
      )}
      {appointments ?(
        <>
          <h1>Agendamentos</h1>
          <button className="mb-11 green-button" onClick={()=>navigate('/create')} type="button">
            Criar agendamento
          </button>
          <button className="mb-11" onClick={()=>navigate('/search')} type="button">
              Buscar agendamento
          </button>
          <button className="mt-10 mb-11" onClick={UpdateAscending}>
              Início de agendamento em ordem crescente
          </button>
          <button className="mb-11" onClick={UpdateDescending}>
              Início  de agendamento em ordem decrescente
          </button>
          <button className="mb-11" onClick={AlphabeticalTitle}>
              Título em ordem alfabética
          </button>
          <ListComponent content={appointments}/>
      </>
      ):(
          <Loading/>
        )}
    </ContainerCenter>
  );
}
