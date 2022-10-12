import { useState} from 'react';
import { Form, useSearchParams } from "@remix-run/react";
import ContainerCenter from "~/components/Container";
import type { LoaderFunction } from '@remix-run/node';
import type { AppointmentI} from '../interfaces/appointment';
import { json } from '@remix-run/node';
import {useLoaderData } from "@remix-run/react";
import SearchAppointment from '~/services/search_appointment';
import ListComponent from '~/components/table';
import ButtonBack from '~/components/buttonBack';


export let  loader:LoaderFunction= async({request})=>{
    const searchParams = new URL(request.url).searchParams.get('title');
    
    const { data }= await SearchAppointment(searchParams);
   

    return json(data);
}

export default function Search(){

    let appointment= useLoaderData<AppointmentI[]>();
    
    const [search,setSearch] = useState<string>(useSearchParams()[0].get("title")??"");
   
    return(
        <ContainerCenter>
            <h1>
                Busque o agendamento por título aqui
            </h1>
           <ButtonBack/>
            <Form method="get" className="flex" >
                <input 
                className='m-0 mb-11'
                name="title" 
                value={search}
                onChange={event=>setSearch(event.target.value)}
                placeholder="Busque aqui" 
                type="text" />
                <button type="submit">
                    Buscar
                </button>
            </Form>
            <ListComponent content={appointment}/>
        </ContainerCenter>
    )
}