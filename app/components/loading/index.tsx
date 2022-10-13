export default function  Loading({color}:{color:string}){
    return(
        <div className="flex justify-center items-center">
        <div className={`spinner-border text-${color} animate-spin inline-block w-8 h-8 border-4 rounded-full`} role="status">
            <span className="visually-hidden"></span>
        </div>
        </div>
    )
}