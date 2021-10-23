import { createContext, useContext } from 'react'

export const OpenDialogContext = createContext(null); 

export const useOpenDialog = () => {
    return useContext(OpenDialogContext)
}

