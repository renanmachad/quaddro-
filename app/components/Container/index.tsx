import type { ChildrenI } from '~/interfaces/childrenType';

const  ContainerCenter: React.FC<ChildrenI>=({children})=>{
    return(
        <div className="flex flex-col items-center p-20 mx-auto w-full h-screen">
            {children}
        </div>
    )

}

export default ContainerCenter;