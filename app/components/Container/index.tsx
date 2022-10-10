import type { LinksFunction } from "@remix-run/node";
import type { ChildrenI } from '~/interfaces/childrenType';


const  ContainerCenter: React.FC<ChildrenI>=({children})=>{
    return(
        <div className="flex items-center flex-col p-20 w-full h-screen mx-auto">
            {children}
        </div>
    )

}

export default ContainerCenter;