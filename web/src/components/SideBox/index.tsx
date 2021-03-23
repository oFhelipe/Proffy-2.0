import React  from 'react'

import './styles.css';

import proffyLogo from '../../assets/images/logo.svg'

    interface SideBoxProps {
        reverse?: boolean,
    }

const SideBox:React.FC<SideBoxProps> = (props) => {
    return (
        <div id={props.reverse ? "reverse-container" : "container"}>
            <div id="purpleBox">
                <div id="logo-container">
                    <img src={proffyLogo} />
                    <h2>Sua plaforma de estudos online.</h2>
                </div>
            </div>
            <div id="whiteBox">
                {props.children}
            </div>
        </div>
    )
}

export default SideBox
