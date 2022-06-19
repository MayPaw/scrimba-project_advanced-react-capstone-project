import React, { useContext } from "react"
import {Context} from "../Context"


export default function LoadingError() {
    const {error} = useContext(Context)

    return (
        <div className="container mx-auto">
            {error ?
                <h1 className = "text-3xl text-center font-semibold absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                    Something went wrong. 😿<br/>Please check your internet connection. 
                </h1>
            :
            <div className = "h-[30px] w-[30px] border-t-red-800 border-4 rounded-full absolute top-[calc(50%-15px)] left-[calc(50%-15px)] animate-spin fill-blue-600">
            </div>
            }

        </div>
    )
}