import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

export interface Teacher {
    id: number,
    subject: string,
    cost: number,
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string
}

interface teacherItemProps {
    teacher: Teacher
    }


const TeacherItem: React.FC<teacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('/connections', {
            user_id: teacher.id
        });
    }

    return (
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt="Fhelipe Rodrigues"/>
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>
                        <p>{teacher.bio}</p>

                        <footer>
                            <p>
                                Preço/hora
                                <strong>R$ {teacher.cost}</strong>
                            </p>
                            <a onClick={()=>{createNewConnection()}} href={` https://wa.me/${teacher.whatsapp}`} type="button">
                                <img src={whatsappIcon} alt="whatsapp"/>
                                Entrar em contato
                            </a>
                        </footer>
                    
                </article>
    );
}

export default TeacherItem;