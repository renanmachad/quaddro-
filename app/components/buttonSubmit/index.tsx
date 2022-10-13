import { useIsSubmitting} from 'remix-validated-form';
import Loading from '../loading';

export const SubbmitButton = ({name,className}:{name:string,className:string})=>{
    const isSubmitting = useIsSubmitting();

    return(
        <button className={className} disabled={isSubmitting} type="submit">
            {isSubmitting ? <Loading color=''/> : name}
        </button>
    )
}