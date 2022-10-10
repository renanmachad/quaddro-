

import { createContext, useContext } from 'react';

export const RootContext = createContext({
    SUPABASE_URL:'',
    SUPABASE_TOKEN:'',
})


export const useRootContext =()=> useContext(RootContext);