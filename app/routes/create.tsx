// packages
import { Form, useActionData} from "@remix-run/react"
import { json} from "@remix-run/node";
import * as Yup from 'yup';
import { withYup } from "@remix-validated-form/with-yup";
import { ValidatedForm } from 'remix-validated-form';
// components
import ContainerCenter from "~/components/Container";
import { toast,Toaster } from 'react-hot-toast';
import ButtonBack from "~/components/buttonBack";
import {FormInput } from '../components/Input/index';

// types 
import type { ActionFunction } from "@remix-run/node";
// services
import { CreateAppointments } from "~/services/create_appointments";
import { validator } from "~/validator/form";
import { SubbmitButton } from "~/components/buttonSubmit";



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
        title:form.get('title'),
        schedule_start:form.get('schedule_start'),
        schedule_end:form.get('schedule_end')
    });

    if(errorExist===true ) return json({ message, error:true})
  
    return json({ message:"Cadastrado com sucesso", error:false});
}
  


export default function Create(){
   
    const data =  useActionData();
   
    // handle error in submit
    if(data?.error ===true){
        toast.error(data?.message);
    } 

    // if not have error, notify user
    if(data?.error===false){
        toast.success('Agendamento realizado');
        setTimeout(function(){
            window.location.reload();
        },3000);
    }
    
    return(
        <ContainerCenter >
            <Toaster/>
            <h1>
                Crie seu agendamento abaixo
            </h1>
            <ButtonBack/>
             <ValidatedForm validator={validator} className="flex justify-center items-center mx-auto h-screen" method="post">
                    <FormInput type="text" name="title" label="Título"/>
                    <FormInput type="datetime-local" name="schedule_start" label="Início do agendamento"/>
                    <FormInput type="datetime-local" name="schedule_end" label="Fim do agendamento"/>
                   <SubbmitButton className="green-button mb-10" name="Criar agendamento"/>
                {/* <button className="green-button" type="submit">
                   Criar agendamento
                </button> */}
            </ValidatedForm>
        </ContainerCenter>
    )
}