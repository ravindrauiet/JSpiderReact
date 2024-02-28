import React, { useContext } from 'react';
import { megaMall } from './Vmart';

const User2 = () => {
    let vmartcart = useContext(megaMall);
    console.log(vmartcart);

    return (
        <div>
            {vmartcart.cloth}
            {vmartcart.device}

        </div>
    );
}

export default User2;
