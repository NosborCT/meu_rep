import styled, { css, keyframes } from 'styled-components';

// Componente que define o contêiner principal da aplicação
export const Container = styled.div`
    max-width: 43.75rem;  // Define a largura máxima do contêiner
    background: #FC7F42;  // Cor de fundo
    border-radius: 0.625rem;  // Bordas arredondadas
    box-shadow: 0 0 20px rgba(0,0,0,0.2);  // Sombra do contêiner
    padding: 1.875rem;  // Espaçamento interno
    margin: 5rem auto;  // Centraliza o contêiner verticalmente e horizontalmente
    
    h1{
        font-size: 1.25rem;  // Tamanho da fonte do título
        display: flex;
        align-items: center;
        flex-direction: row;  // Organiza o título e ícone na mesma linha

        svg{
            margin-right: 0.625rem;  // Espaçamento à direita do ícone SVG
        }
    }
`;

// Componente para o formulário de entrada de dados
export const Form = styled.form`
    margin-top: 1.875rem;  // Espaçamento superior do formulário
    display: flex;
    flex-direction: row;  // Organiza os elementos em linha

    input{
        flex: 1;  // O campo de entrada ocupa todo o espaço disponível
        border: 1px solid ${props =>(props.error ? '#FF0000' : '#ddd' )};  // Borda vermelha se houver erro
        padding: 0.625rem 0.938rem;  // Espaçamento interno do campo de entrada
        border-radius: 4px;  // Bordas arredondadas do campo de entrada
        font-size: 1.063rem;  // Tamanho da fonte
    }
`; 

// Animação de rotação para o botão de envio quando está carregando
const animate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

// Componente do botão de envio do formulário
export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',  // Define o tipo do botão como 'submit'
    disabled: props.loading,  // Desabilita o botão se estiver no estado de carregamento
}))`
    background: #123331;  // Cor de fundo do botão
    border: 0;  // Remove a borda padrão
    border-radius: 4px;  // Bordas arredondadas
    margin-left: 0.625rem;  // Espaçamento à esquerda
    padding: 0 0.938rem;  // Espaçamento interno horizontal
    display: flex;
    justify-content: center;
    align-items: center;  // Centraliza o conteúdo dentro do botão

    &[disabled]{
        cursor: not-allowed;  // Define o cursor como não permitido ao desabilitar o botão
        opacity: 0.5;  // Diminui a opacidade do botão quando desabilitado
    }

    ${props => props.loading && 
        css`
            svg{
                animation: ${animate} 2s linear infinite;  // Aplica a animação ao ícone SVG quando carregando
            }
        `
    }
`;

// Componente para listar os repositórios
export const List = styled.ul`
    list-style: none;  // Remove os marcadores da lista
    margin-top: 1.25rem;  // Espaçamento superior

    li{
        padding: 0.938rem 0;  // Espaçamento interno superior e inferior de cada item da lista
        display: flex;
        flex-direction: row;  // Organiza os itens em linha
        align-items: center;  // Alinha os itens verticalmente
        justify-content: space-between;  // Espaça os itens uniformemente

        & + li{
            border-top: 1px solid #eee;  // Adiciona uma borda superior entre os itens da lista
        }

        a{
            color: #123331;  // Cor do link
            text-decoration: none;  // Remove o sublinhado do link
        }
    }
`;

// Componente do botão de deletar um repositório da lista
export const DeleteButton = styled.button.attrs({
    type: 'button',  // Define o tipo do botão como 'button'
})` 
    background: transparent;  // Define o fundo como transparente
    color: #123331;  // Cor do ícone de lixeira
    border: 0;  // Remove a borda padrão
    padding: 0.5rem 0.438rem;  // Define o espaçamento interno
    outline: 0;  // Remove o contorno padrão ao focar
    border-radius: 4px;  // Bordas arredondadas do botão
`;
