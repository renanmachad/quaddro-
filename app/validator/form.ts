import { withYup } from '@remix-validated-form/with-yup';
import * as Yup from 'yup';

export const validator= withYup(
    Yup.object({
        title:Yup.string().min(1,'Título é obrigatório'),
        schedule_start:Yup.string().min(1,'Data de início obrigatória'),
        schedule_end: Yup.string().min(1,'Data final obrigatória')
    })
)