import { createContext, useContext } from 'react'

export const ventasContext = createContext(null); 

export const useVentas = () => {
    return useContext(ventasContext)
}