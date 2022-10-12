import { useEffect,useState } from "react";
import type { AppointmentI } from "~/interfaces/appointment";
import type { LinksFunction } from "@remix-run/node";
import ContainerCenter from "~/components/Container";
import  ListComponent  from '../components/table/index';
import ListAppointment from "~/services/list_appointments";
import { format } from 'date-fns';
import { useNavigate } from "@remix-run/react"


export default function Index() {
  //const { appointments, error } = useLoaderData<AppointmentI>()
 const [appointments,setAppointments]= useState<AppointmentI[]| null>();
 const[error,setError]= useState<any>('');
 let navigate = useNavigate()

  useEffect(()=>{
    async function Load(){
      const {data, error}=await  ListAppointment();
      setAppointments(data);
      if(error) setError(error);
    } 
    Load();
  },[]);

  return (
    <ContainerCenter>
      {error &&(
        <div>
          <p>
            Um erro ocorreu!
          </p>
        </div>
      )}
      <h1>Agendamentos</h1>
      <button className="mb-11 green-button" onClick={()=>navigate('/create')} type="button">
        Criar agendamento
      </button>
      <button className="mb-11" onClick={()=>navigate('/search')} type="button">
          Buscar agendamento
      </button>
      <ListComponent content={appointments}/>
    </ContainerCenter>
  );
}
