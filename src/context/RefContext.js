import React, { createContext, useContext, useRef } from 'react';

const RefContext = createContext();

export const RefProvider = ({ children }) =>
{
    const projectRef = useRef(null);
    const howItWorksRef = useRef(null);
    const platformRef = useRef(null);
    const benefitsRef = useRef(null);
    const contactRef = useRef(null);
    const indexRef = useRef(null);

    const handleScrollTo = (ref) =>
    {
        if (ref && ref.current)
        {
            const navbarHeight = 80; // Altura del navbar en píxeles
            const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <RefContext.Provider value={{ indexRef, handleScrollTo, projectRef, howItWorksRef, platformRef, benefitsRef, contactRef }}>
            {children}
        </RefContext.Provider>
    );
};

export const useRefs = () => useContext(RefContext);