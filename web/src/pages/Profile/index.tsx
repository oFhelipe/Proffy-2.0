import React from 'react'

import './styles.css';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

const Profile = () => {
    return (
        <div id="profile-continer" className="container">
            <PageHeader 
                page="Meu perfil"
                title="">
                    <div className="avatar-name-container">
                        <img src="https://avatars3.githubusercontent.com/u/59922096?s=460&u=15dc039579415bf83737bf301a64569d13267cbe&v=4"/>
                        <h2>Fhelipe Rodrigues</h2>
                    </div>
            </PageHeader>
            <main className="form-box">
                <form>
                    <fieldset>
                        <legend>Seus dados</legend>
                        
                        <div className="input-container">
                            <Input label="Nome" name="name"/>
                            <Input label="Sobrenome" name="last-name"/>
                        </div>

                        <div className="input-container" id="maior-menor-input-container">
                           <Input label="E-mail" name="email"/>
                           <Input id="whatsapp-input" label="Whatsapp" name="whatsapp"/>
                        </div>

                        <Textarea name="bio" label="Biografia"/>

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <div className="input-container" id="maior-menor-input-container">
                            <Select  
                                label="Matéria" 
                                name="subject"
                                options={[
                                    {value: 'Artes', label: 'Artes'},
                                    {value: 'Biologia', label: 'Biologia'},
                                    {value: 'Educação fisica', label: 'Educação fisica'},
                                    {value: 'Física', label: 'Física'},
                                    {value: 'Química', label: 'Química'},
                                    {value: 'Português', label: 'Português'},
                                    {value: 'Matemática', label: 'Matemática'},
                                    {value: 'História', label: 'História'},
                                    {value: 'Geografia', label: 'Geografia'},
                                    {value: 'Filosofia', label: 'Filosofia'},
                                    {value: 'Sociologia', label: 'Sociologia'},
                                ]}/>
                            <Input label="Custo da sua hora por aula" name="cost" />
                        </div>
                    </fieldset>
                </form>
            </main>
        </div>
    )
}

export default Profile
