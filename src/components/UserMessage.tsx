import React, { useContext, useEffect, useState } from "react"
import { Context } from "../Context"

type Props = {
    message: string
}

export default function UserMessage (props: Props) {   
    const [animation, setAnimation] = useState <string> ("animate-slideUp")

    useEffect(() => {
        setTimeout(() => setAnimation("animate-slideDown"), 500)
    }, [])

    return(
             <div className = {`text-lg text-center text-slate-100 w-full bg-red-800 shadow-lg py-5 fixed bottom-0 left-0 ${animation}`}>
                {props.message}
             </div>
    )
}

