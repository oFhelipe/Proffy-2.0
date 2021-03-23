import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import exitIcon from '../../assets/images/icons/exit-icon.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api';

function Home() {

    const [ totalConnections, setTotalConnections ] = useState(0);

    useEffect(()=>{
        api.get('/connections').then(response => {
            const { total } = response.data;
            setTotalConnections(total);
        });
    },[]);

    return (
        <div id="page-landing">
            <div className="profile-exit-bar">
                <Link to="/profile" className="profile-avatar-text">
                    <img src="https://avatars3.githubusercontent.com/u/59922096?s=460&u=15dc039579415bf83737bf301a64569d13267cbe&v=4"/>
                    <p>Fhelipe Rodrigues</p>
                </Link>
                <button>
                    <img src={exitIcon} alt="Sair"/>
                </button>
            </div>
            <div id="page-landing-logo-container" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos" 
                    className="hero-image"/>
            </div>
            
            <div className="bottom-container">
                    <h2 className="bemvindo-text">Seja bem-vindo.<br/><strong>O que deseja fazer?</strong></h2>
                   
                   <div className="connection-button-container">
                        <div className="buttons-container">
                            <Link to="/study" className="study">
                                <img src={studyIcon} alt="Estudar"/>
                                Estudar
                            </Link>
                            
                            <Link to="/give-classes" className="give-classes">
                                <img src={giveClassesIcon} alt="Dar aulas"/>
                                Dar aulas
                            </Link>
                        </div>
                        <span className="total-connections">
                            <p>Total de {totalConnections} conexões</p>
                            <p>já realizadas <img src={purpleHeartIcon} alt="coração"/></p>
                        </span>
                    </div>
                </div>
        </div>
    );
}

export default Home;