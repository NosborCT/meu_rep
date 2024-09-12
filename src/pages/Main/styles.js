import styled from 'styled-components';

export const Container = styled.div`

    max-width: 43.75rem;
    background: #FC7F42;
    border-radius: 0.625rem;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    padding: 1.875rem;
    margin: 5rem auto;
    
    


    h1{
        font-size: 1.25rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        svg{
            margin-right: 0.625rem;
            
        }
    }
`;

export const Form = styled.form`
    margin-top: 1.875rem;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: 1px solid #ddd;
        padding: 0.625rem 0.938rem;
        border-radius: 4px;
        font-size: 1.063rem;
    }

`;
    
export const SubmitButton = styled.button`

    background: #123331;
    border: 0;
    border-radius: 4px;
    margin-left:   0.625rem;
    padding: 0 0.938rem;
    display: flex;
    justify-content: center;
    align-items: center;



`;