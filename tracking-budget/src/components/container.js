import React, {useContext} from 'react'
import {DarkModeContext} from './darkModeContext'

function Container() {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `dark` : `light`}></div>
    )
}

export default Container;