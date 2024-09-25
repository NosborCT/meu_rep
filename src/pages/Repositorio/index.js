import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api'; // Importa o serviço de API para fazer as requisições HTTP
import { Container } from './style';  // Importa o componente de estilo

export default function Repositorio() {

    const { repositorio } = useParams();  // Usa o hook useParams para obter o parâmetro 'repositorio' da URL
    const [repositoriosData, setRepositorioData] = useState({}); // Define o estado para armazenar os dados do repositório
    const [issues, setIssues] = useState([]);  // Define o estado para armazenar as issues do repositório
    const [loading, setLoading] = useState(true);  // Define o estado de loading para controlar a exibição durante o carregamento
  
    useEffect(() => {
        // Função assíncrona que faz as requisições para obter dados do repositório e issues
        async function load() {
            const nomeRepo = repositorio;  // Obtém o nome do repositório a partir do parâmetro da URL

            try {
                // Faz duas requisições ao mesmo tempo: uma para os dados do repositório e outra para as issues abertas
                const [repositoriosData, issuesData] = await Promise.all([
                    api.get(`/repos/${nomeRepo}`), // Requisição para obter dados do repositório
                    api.get(`/repos/${nomeRepo}/issues`, { // Requisição para obter as issues abertas do repositório
                        params: {
                            state: 'open', // Somente issues abertas
                            per_page: 5   // Limita a 5 issues por página
                        }
                    })
                ]);
                
                // Atualiza o estado com os dados recebidos
                setRepositorioData(repositoriosData.data);
                setIssues(issuesData.data);
                setLoading(false); // Desativa o estado de loading
            } catch (error) {
                // Caso ocorra um erro durante as requisições, ele é capturado aqui
                console.error("Erro ao carregar os dados do repositório", error);
                setLoading(false); // Mesmo com erro, desativa o loading
            }
        }

        load(); // Chama a função de carregamento quando o componente for montado
        
    }, [repositorio]);  // O useEffect depende do valor de 'repositorio', ou seja, ele roda novamente se o parâmetro mudar

    return (
       <Container>
            {loading ? (  // Se o estado de loading estiver true, exibe "Carregando..."
                <h1>Carregando...</h1>
            ) : (
                // Quando o loading é false, exibe os dados do repositório e as issues
                <>
                    <h1>{repositoriosData.name}</h1> {/* Exibe o nome do repositório */}
                    <p>{repositoriosData.description}</p> {/* Exibe a descrição do repositório */}
                    <ul>
                        {issues.map(issue => (  // Faz um map nas issues e exibe o título de cada uma como link
                            <li key={issue.id}>
                                <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                                    {issue.title} {/* Título da issue */}
                                </a>
                            </li>
                        ))}
                    </ul>
                </>
            )}
       </Container>
    );
}
