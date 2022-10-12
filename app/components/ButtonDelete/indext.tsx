import { toast } from "react-hot-toast";
import { DeleteAppointments } from "~/services/delete_appointements"
import type { AppointmentI} from '../../interfaces/appointment';

export default function DeleteButton({id}:{id?:string}) {
    async function Delete(id:string): Promise<void>{
       
        const { error }= await DeleteAppointments({id:id});
        
        if(error===true){
            toast.error('Erro ao excluir, tente novamente');
        }

        toast.success('Deletado com sucesso!');
        setTimeout(()=>{
            window.location.reload()
        },3000)

    }
    return(
        <button className="red-button"  type="button" onClick={() =>Delete(id)}>
            Deletar agendamento
        </button>
    )

}