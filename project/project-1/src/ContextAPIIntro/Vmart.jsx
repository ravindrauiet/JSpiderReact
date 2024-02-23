import React, { createContext, useState } from 'react';

export const megaMall = createContext();

const Vmart = ({children}) => {
    const [state, setState] = useState({
        cloth: "T-Shirt",
        device: "i-phone"
    });

    return (
        <div>
            <megaMall.Provider value={state}>{children}</megaMall.Provider>
        </div>
    );
}

export default Vmart;