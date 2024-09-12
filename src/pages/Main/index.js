import React from 'react';
import {Container, Form , SubmitButton} from './styles'
import {FaGithub, FaPlus} from 'react-icons/fa'


export default function Main(){
    return(

        <Container>
            <h1>
                <FaGithub size={16}/>
                Meus Repositorios
            </h1>

            <Form onsSubmit={()=>{}}>
                <input type='text' placeholder='Adicionar Repositorios'/>
                <SubmitButton>
                    <FaPlus color='#FFF' size={14}/>
                </SubmitButton>
            </Form>

        </Container>
        
    )
}