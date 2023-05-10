"use client"

import { createContext, useContext, useState } from 'react';

type ModalName = string | null;
interface ModalContextType {
    modalName: ModalName,
    toggleModal: (modal: ModalName) => void;
}

const ModalContext = createContext<ModalContextType>({
    modalName: null,
    toggleModal: _ => {}
});

export const useModalContext = () => useContext(ModalContext);

export function ModalProvider({ children }: {children: React.ReactNode}) {
    const [modalName, toggleModal] = useState<ModalName>(null);

    return (
        <ModalContext.Provider value={{ modalName, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
};