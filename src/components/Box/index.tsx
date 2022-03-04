import React from 'react';
import style from './Box.module.css';

const Box = ({ children }: {children: React.ReactNode}) => {
    return(
        <div className={ style.container }>
            { children }
        </div>
    );
}

export default Box;