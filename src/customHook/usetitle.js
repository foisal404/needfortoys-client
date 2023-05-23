import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        if(title===''){
             document.title=`NeedForToys`
        }
        else{
            document.title=`${title} | NeedForToys`
        }
    },[title])
}
export default useTitle