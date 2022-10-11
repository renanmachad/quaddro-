import { useNavigate } from "@remix-run/react"

// This button make the user returns to the home page
export default function ButtonBack(){

    const navigate = useNavigate();
    return(
        <button type="button" className="mb-8 w-full]" onClick={()=>navigate('/')}>
            Voltar
        </button>
    )
}