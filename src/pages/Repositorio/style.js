import styled from "styled-components";
import { Link } from "react-router-dom";

// Estiliza o container principal da página
export const Container = styled.div`
    max-width: 43.75rem; // Define a largura máxima do container
    background: #FC7F42; // Define a cor de fundo do container
    border-radius:  0.625rem; // Arredonda as bordas
    box-shadow: 0 0 20px rgba(0,0,0,0.2); // Aplica sombra para dar profundidade
    padding: 1.875rem; // Espaçamento interno
    margin: 5rem  auto; // Centraliza o container vertical e horizontalmente
`;

// Estiliza o header que contém informações do dono do repositório
export const Owner = styled.header`
    display: flex; // Define um layout flexível
    flex-direction: column; // Empilha os elementos verticalmente
    align-items: center; // Centraliza os itens horizontalmente

    img{
        width: 9.375rem; // Define a largura da imagem
        border-radius: 20%; // Arredonda as bordas da imagem
        margin: 20px 0; // Espaçamento acima e abaixo da imagem
        background-color: #f7f7f7; // Cor de fundo da imagem
    }
    h1{
        font-size: 1.875rem; // Define o tamanho da fonte
        color: #f7f7f7; // Define a cor do texto
    }
    p{
        margin-top: 5px; // Define um espaçamento acima do parágrafo
        font-size: 14px; // Define o tamanho da fonte do parágrafo
        color: #000; // Cor do texto
        text-align: center; // Centraliza o texto
        line-height: 1.4; // Define a altura da linha
        max-width: 400px; // Define a largura máxima do parágrafo
    }
`;

// Estiliza o componente de loading (carregando)
export const Loading = styled.div`
    color: #f7f7f7; // Define a cor do texto
    display: flex; // Define layout flexível
    justify-content: center; // Centraliza horizontalmente
    align-items: center; // Centraliza verticalmente
    height: 100vh; // O container ocupa a altura total da tela
`;

// Estiliza o botão de voltar (link para a página anterior)
export const BackButton = styled(Link)`
    border: 0; // Remove a borda do botão
    outline: 0; // Remove o contorno ao focar no botão
    background: transparent; // Define o fundo como transparente
`;

// Estiliza a lista de issues do repositório
export const IssuesList = styled.ul`
    margin-top: 1.875rem; // Espaçamento acima da lista
    padding-top: 1.875rem; // Espaçamento interno superior
    border-top: 1px solid #eee; // Adiciona uma borda superior fina
    list-style: none; // Remove os marcadores da lista

    li{
        display: flex; // Alinha os itens em uma linha
        padding: 0.938rem 0.625rem; // Espaçamento interno
    }
    &+li{
        margin-top: 12px; // Espaçamento entre os itens da lista
    }
    img{
        width: 2.25rem; // Define a largura da imagem do avatar
        height: 2.25rem; // Define a altura da imagem do avatar
        border-radius: 50%; // Define as bordas arredondadas
        border: 2px solid #0D2636; // Borda ao redor do avatar
    }
    div{
        flex: 1; // Faz com que o div ocupe o espaço restante
        margin-left: 12px; // Espaçamento à esquerda da imagem do avatar
        
        p{
            margin-top: 10px; // Espaçamento acima do parágrafo
            font-size: 12px; // Tamanho do texto do parágrafo
            color: #000; // Cor do texto
        }

        tags{
           display: block; // Define um bloco para as tags
           margin-top: 8px; // Espaçamento acima das tags

            span{
                background: #222; // Cor de fundo da tag
                color: #FFF; // Cor do texto dentro da tag
                border-radius: 4px; // Arredonda as bordas da tag
                font-size: 12px; // Tamanho da fonte da tag
                font-weight: 600; // Negrito no texto da tag
                padding: 5px 7px; // Espaçamento interno da tag
                margin-right: 4px; // Espaçamento à direita de cada tag
            }
        }
    }

    strong{
        font-size: 15px; // Tamanho da fonte do título da issue
        display: flex; // Alinha o link com as tags

        a{
            text-decoration: none; // Remove sublinhado do link
            color: #222; // Cor do link
            transition: 0.3s; // Transição suave para o hover

            &:hover{
                color: #0071db; // Muda a cor do link ao passar o mouse
            }
        }
    }
`;

export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .button {
        background-color: #222;
        color: #fff;
        width: 8.5em;
        height: 2.9em;
        border: 0.2em solid transparent;
        border-radius: 11px;
        text-align: center;
        transition: all 0.4s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        position: relative;
        padding: 0.5em 1em;
        font-size: 1em;
        cursor: pointer;
    }

    .button:hover {
        background-color: #3654ff;
        border-color: #3654ff;
    }

    .button svg {
        width: 1.2em;
        height: 1.2em;
        transition: transform 0.4s ease;
    }


    
    .button:hover svg {
        transform: translateX(5px);
    }

    .text {
        margin: 0;
    }

    button {
        outline: 0;
        border: 0;
        background: #222;
        color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;

export const Filters = styled.div`
    width: 18.75rem;
    display: flex; /* Usando flexbox para layout */
    align-items: center; /* Alinhamento vertical ao centro */
    justify-content: space-around; /* Espaço entre os itens */
    
    button {
        outline: 0; /* Remove o contorno padrão do botão */
        border: 0; /* Remove a borda do botão */
        border-radius: 4px;
        background: #222; /* Cor de fundo do botão */
        color: #fff; /* Cor do texto do botão */
        align-items: center;
        justify-content: center;
        padding: 0.5rem 1rem; /* Preenchimento do botão corrigido */
        cursor: pointer; /* Cursor em forma de ponteiro ao passar o mouse */
        transition: background 0.3s; /* Transição suave para a cor de fundo */

        &:hover {
            background: #3654ff; /* Cor de fundo ao passar o mouse */
        }
    }
`;