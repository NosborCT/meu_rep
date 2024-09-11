import React from 'react';
import {Container, Form , SubmitButton} from './styles'
import {FaGithub, FaPlus} from 'react-icons/fa'


export default function Main(){
    return(

        <Container>
            <FaGithub size={16}/>
            <h1>Meus Repositorios</h1>
            <Form onsSubmit={()=>{}}>
                <input type='text' placeholder='adicionar repositorios'/>
                <SubmitButton>
                    <FaPlus color='#FFF' size={14}/>
                </SubmitButton>
            </Form>

        </Container>
        
    )
}