// packages
import { Form, useActionData} from "@remix-run/react"
import { json} from "@remix-run/node";
 // components
import ContainerCenter from "~/components/Container";
import { toast,Toaster } from 'react-hot-toast';
// types 
import type { ActionFunction } from "@remix-run/node";
// services
import { CreateAppointments } from "~/services/create_appointments";
import ButtonBack from "~/components/buttonBack";



export const  action= async ({ request }:ActionFunction)=> {

    /**
     * @description - Get title of the form
     * @description - Get the schedule_start
     * @description - Get the schedule_end
     * 
     * @return - name, schedule_start, schedule_end {JSON}
     */
    const form = await request.formData();

    const { data ,errorExist, message} = await CreateAppointments({
        title:form.get("title"),
        schedule_start:form.get("schedule_start"),
        schedule_end: form.get("schedule_end")
    });

  


    if(errorExist===true ) return json({ message, error:true})

  
    return json({ message:"Cadastrado com sucesso", error:false});
}
  


export default function Create(){
   
    const data =  useActionData();
   
  
    
    // handle error in submit
    if(data?.error ===true){
        toast.error(data?.message);
        setTimeout(function(){
            window.location.reload();
        },3000)
        window.location.reload();
    } 


    // if not have error, notify user
    if(data?.error===false){
        toast.success('Agendamento realizado');
        setTimeout(function(){
            window.location.reload();
        },3000)
        
            
    }
    
    return(
        <ContainerCenter >
            <Toaster/>
            <h1>
                Crie seu agendamento abaixo
            </h1>
            <ButtonBack/>
             <Form className="flex justify-center items-center mx-auto h-screen" method="post">
                    <label className="m-0" htmlFor="title">
                        Título
                    </label>
                    
                    <input id="title" name="title"type='text'/>
                
                    <label htmlFor="schedule_start">
                        Início do agendamento
                    </label>
                    <input type="datetime-local" id="schedule_start" name="schedule_start"/>
                
                    <label htmlFor="schedule_end">
                        Fim do agendamento
                    </label>
                    <input type="datetime-local" id="schedule_end" name="schedule_end"/>
                
                <button className="green-button" type="submit">
                   Criar agendamento
                </button>
            </Form>
        </ContainerCenter>
    )
}