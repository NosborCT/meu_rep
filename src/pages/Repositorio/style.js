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
