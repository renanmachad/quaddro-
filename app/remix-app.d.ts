

declare global{
    interface Window {
        ENV:{
            SUPABASE_URL:string;
            SUPABASE_TOKEN:string;
        },
    }
}

export {}