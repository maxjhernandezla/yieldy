import React, { createContext, useContext, useRef } from 'react';

const RefContext = createContext();

export const RefProvider = ({ children }) =>
{
    const projectRef = useRef(null);
    const howItWorksRef = useRef(null);
    const platformRef = useRef(null);
    const benefitsRef = useRef(null);
    const contactRef = useRef(null);

    const handleScrollTo = (ref) =>
    {
        if (ref)
        {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <RefContext.Provider value={{ handleScrollTo, projectRef, howItWorksRef, platformRef, benefitsRef, contactRef }}>
            {children}
        </RefContext.Provider>
    );
};

export const useRefs = () => useContext(RefContext);