import ButtonBack from "~/components/buttonBack";
import ContainerCenter from "~/components/Container";
import React from 'react';
import { Form, useSearchParams } from "@remix-run/react";
import type { LoaderFunction } from '@remix-run/node';
import {json} from '@remix-run/node';

import { useLoaderData} from '@remix-run/react';
import type { AppointmentI } from "~/interfaces/appointment";
import FilterLargerValue from "~/utils/filter_ascending_order";
import FilterSmallValue from '~/utils/filter_descending_order';


export let lodaer:LoaderFunction= async({request})=>{
    const searchParams= new URL(request.url).searchParams.get('filter');

    if(searchParams==="maior"){
        console.log(await FilterLargerValue())        
    }
    await FilterLargerValue()
    return json(await FilterLargerValue())
}


export default function Filter(){

        // get data from server
    let appointments = useLoaderData<AppointmentI[]>();

    const [search,setSearch]=React.useState<string>(useSearchParams()[0].get('filter') ?? "");

    console.log(appointments)

    return(
        <ContainerCenter>
            <h1>
                Filtre por data aqui
            </h1>
            <ButtonBack/>
            <Form className="flex" method="get">
               <select name="filter" title="filter" onChange={event=>setSearch(event.target.value)}>
                    <option  value="maior">Maior data</option>
                    <option  value="menor">Menor data</option>
               </select>
                <button type="submit">
                    Filtrar
                </button>
            </Form>
        </ContainerCenter>
    )
}