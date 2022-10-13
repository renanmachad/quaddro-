import { useField } from 'remix-validated-form';
import type { InputI} from '../../interfaces/input';



export const FormInput = ({name, label,type}:InputI) =>{
    const { error, getInputProps }= useField(name);

    return(
        <>
            <label htmlFor={name}>{label}</label>
            <input type={type} {...getInputProps({id:name})}/>
            {error && (
                <span className='alert-error'>
                    {error}
                </span>
            )}
        </>
    )
}