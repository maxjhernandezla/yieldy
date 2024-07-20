// ModalContext.js
import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) =>
{
    const [modalState, setModalState] = useState({ open: false, text: '' });

    const openModal = (text) =>
    {
        setModalState({ open: true, text });
    };

    const closeModal = () =>
    {
        setModalState({ open: false, text: '' });
    };

    return (
        <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
