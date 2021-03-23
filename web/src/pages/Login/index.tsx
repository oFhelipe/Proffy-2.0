import React, { useState, FormEvent } from 'react'
import SideBox from '../../components/SideBox';

import './styles.css'

import passwordEye from '../../assets/images/password-eye.svg'
import hashedPasswordEye from '../../assets/images/hashed-password-eye.svg'

import checkIcon from '../../assets/images/icons/check-icon.svg'
import purpleHeart from '../../assets/images/icons/purple-heart.svg'
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Login() {

    const [seePassword, setSeePassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleChangeEyePassword(){
        setSeePassword(!seePassword);
    }
    
    function handleCheckRememberMe(){
        setRememberMe(!rememberMe);
    }

    async function verifyUser(e: FormEvent) {

        e.preventDefault();

        const response = await api.post('/auth/authenticate', {
            email:email,
            password:password
        });

        if(response.data.error) {
            
           window.alert(response.data.error);
           setEmail("");
           setPassword("");
           return;

        }

        const { token, user_id } = response.data;
        window.alert(`Usuário cadastrado, token:${token}`)
    }

    return (
        <div id="login-content">
            <SideBox>
                <form onSubmit={verifyUser} id="form-container" >
                    <h2>Fazer login</h2>
                    
                    <div id="input-container">
                        <div>
                            <input 
                                required
                                placeholder="Email" 
                                type="email" 
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div>
                            <input 
                                required
                                type={seePassword ? "text" :"password"} 
                                placeholder="Senha" 
                                value={password}
                                onChange={(e)=>{ setPassword(e.target.value) }}/>
                            <img  onClick={handleChangeEyePassword} src={seePassword ? hashedPasswordEye : passwordEye} />
                        </div>
                    </div>

                    <div id="forgetPassword-remember-container">
                        <div>
                            <span onClick={handleCheckRememberMe} id={rememberMe ? "selected" : ""}>
                                {rememberMe && <img src={checkIcon} />}
                            </span>
                            <p>lembrar-me</p>
                        </div>
                        <a href="#">Esqueci minha senha</a>
                    </div>

                    <button type="submit">
                        Entrar
                    </button>
               
                    <div id="creatAccount-free-container">
                        <div>
                            <p>Não tem conta?</p>
                            <Link to="/register">Cadastre-se</Link>
                        </div>
                        <p>É de graça <img src={purpleHeart}/></p>
                    </div>

                </form>
            </SideBox>
        </div>
    )
}

export default Login
