import { createContext, useState } from "react";

export const ModalContext = createContext()

const ModalContextProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const open_modal = () => setIsOpen(true)
    const close_modal = () => setIsOpen(false)

    return (
        <ModalContext.Provider value={{ isOpen, open_modal, close_modal }}>
            { children }
        </ModalContext.Provider>
    )
}

export default ModalContextProvider