import { toast } from "react-hot-toast";
import { DeleteAppointments } from "~/services/delete_appointements"

export default function DeleteButton(id:any) {

    async function Delete(id:string): Promise<void>{
        const { error }= await DeleteAppointments({id:id});

        if(error===true){
            toast.error('Erro ao excluir, tente novamente');
        }

        toast.success('Deletado com sucesso!')
    }
    return(
        <button className="red-button"  type="button" onClick={() =>Delete(id)}>
            Deletar agendamento
        </button>
    )

}