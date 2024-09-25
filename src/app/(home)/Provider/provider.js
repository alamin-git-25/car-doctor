"use client"

import { useState } from "react"
import { ServiceContext } from "../cotext";



export const ServiceProvider = ({children})=>{
    const [pymaent, setPayment] = useState(false);


    return (
        <ServiceContext.Provider value={{pymaent, setPayment}}>
            {children}
      </ServiceContext.Provider>

    )
}