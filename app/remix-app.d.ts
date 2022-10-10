import type { SupabaseScript } from "./client";

declare global{
    interface Window {
        ENV:{
            SUPABASE_URL:string;
            SUPABASE_TOKEN:string;
        },
        supabase?:SupabaseScript;
    }
}

export {}