import React, { useState } from 'react'
import SideBox from '../../components/SideBox';
import SuccessScreen from '../../components/SuccessScreen';

import './styles.css'

import passwordEye from '../../assets/images/password-eye.svg'
import hashedPasswordEye from '../../assets/images/hashed-password-eye.svg'

import purpleBack from '../../assets/images/icons/purple-back.svg'
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Register() {

    

    const [seePassword, setSeePassword] = useState(false)
    const [successRegister, setSuccessRegister] = useState(false);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleChangeEyePassword(){
        setSeePassword(!seePassword);
    }
    
    async function handleRegisterUser() {
    
        const response = await api.post('/users',{
            confirmPassword,
            name,
            lastName,
            email,
            password
        });

        if(response.data.error) {
            
            window.alert(response.data.error);
            setName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            return;
 
         }

         setSuccessRegister(true);
    }

    return (
        <div id="register-content">

        {successRegister ? <SuccessScreen 
                title="Cadastro concluído" 
                subtitle="Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência." 
                to="/login" 
                buttonTitle="Fazer login" />
        :<SideBox reverse>
        <Link to="/login" id="back-icon"><img src={purpleBack}/></Link>
        <form id="form-container">
            <h2>Cadastro</h2>

            <p id="subtitle">Preencha os dados abaixo para começar.</p>
            
            <div id="input-container">

                <div>
                    <input 
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        placeholder="Email" 
                        type="email" />
                </div>

                <div>
                    <input 
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        type="text" 
                        placeholder="Nome" />
                </div>

                <div>
                    <input 
                        value={lastName}
                        onChange={(e)=>{setLastName(e.target.value)}}
                        type="text" 
                        placeholder="Sobrenome" />
                </div>

                <div>
                    <input 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        type={seePassword ? "text" :"password"} 
                        placeholder="Senha" />
                    <img  
                      onClick={handleChangeEyePassword} 
                      src={seePassword ? hashedPasswordEye : passwordEye} />
                </div>
                <div>
                    <input
                        value={confirmPassword}
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        type={seePassword ? "text" :"password"} 
                        placeholder="Confirmar senha" />
                    <img  
                      onClick={handleChangeEyePassword} 
                      src={seePassword ? hashedPasswordEye : passwordEye} />
                </div>



            </div>


            <button onClick={handleRegisterUser} type="button">
                Cadastrar
            </button>
       


        </form>
    </SideBox>

        }

         </div>
    )
}

export default Register
