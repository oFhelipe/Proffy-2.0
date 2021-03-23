import React from 'react'

import './styles.css'

import feitoCheck from '../../assets/images/icons/feito_check.svg' 
import { Link } from 'react-router-dom'

interface SuccessScreenProps {
    to: string,
    title: string,
    subtitle: string,
    buttonTitle: string
}

const SuccessScreen:React.FC<SuccessScreenProps> = ({to, title, subtitle, buttonTitle}) => {
    return (
        <div id="success-screen-container">
            <img src={feitoCheck}/>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <Link to={to}>{buttonTitle}</Link>
        </div>
    )
}

export default SuccessScreen
