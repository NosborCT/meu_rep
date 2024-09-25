import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api'; // Importa o serviço de API para fazer as requisições HTTP
import { IssuesList, Container, Owner } from './style';  // Importa o componente de estilo
import { FaArrowLeft } from 'react-icons/fa';

export default function Repositorio() {
    const { repositorio } = useParams();  // Usa o hook useParams para obter o parâmetro 'repositorio' da URL
    const [repositoriosData, setRepositorioData] = useState({}); // Define o estado para armazenar os dados do repositório
    const [issues, setIssues] = useState([]);  // Define o estado para armazenar as issues do repositório
    const [loading, setLoading] = useState(true);  // Define o estado de loading para controlar a exibição durante o carregamento
  
    useEffect(() => {
        async function load() {
            const nomeRepo = repositorio;

            try {
                const [repositoriosData, issuesData] = await Promise.all([
                    api.get(`/repos/${nomeRepo}`),
                    api.get(`/repos/${nomeRepo}/issues`, {
                        params: {
                            state: 'open',
                            per_page: 5
                        }
                    })
                ]);
                
                setRepositorioData(repositoriosData.data);
                setIssues(issuesData.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao carregar os dados do repositório", error);
                setLoading(false);
            }
        }

        load();
    }, [repositorio]);

    return (
        <Container>
        {/* Link para voltar à página anterior */}
        <Link to="/"> 
            <FaArrowLeft color="#000" size={30} /> {/* Ícone de seta para a esquerda */}
        </Link>
    
        {/* Verifica se os dados estão carregando */}
        {loading ? (
            <h1>Carregando...</h1>  /* Exibe "Carregando..." enquanto os dados estão sendo buscados */
        ) : (
            <Owner>
                {/* Verifica se os dados do dono do repositório estão disponíveis */}
                {repositoriosData.owner && (
                    <>
                        {/* Imagem do avatar do dono do repositório */}
                        <img 
                            src={repositoriosData.owner.avatar_url} 
                            alt={repositoriosData.owner.login} 
                        />
                        {/* Nome do repositório */}
                        <h1>{repositoriosData.name}</h1>
                        {/* Descrição do repositório */}
                        <p>{repositoriosData.description}</p>
                    </>
                )}
            </Owner>
        )}
    
        {/* Lista de issues do repositório */}
        <IssuesList>
            {/* Mapeia cada issue retornada pela API */}
            {issues.map(issue => (
                <li key={String(issue.id)}>
                    {/* Imagem do avatar do usuário que abriu a issue */}
                    <img src={issue.user.avatar_url} alt={issue.user.login} />
                    <div>
                        <strong>
                            {/* Link para a página da issue */}
                            <a href={issue.html_url} target="_blank" rel="noreferrer" >{issue.title}</a>
                        </strong>
    
                        {/* Exibe as labels associadas à issue */}
                        <tags>
                            {issue.labels.map(label => (
                                <span key={String(label.id)}>{label.name}</span>
                            ))}
                        </tags>
    
                        {/* Nome de login do usuário que criou a issue */}
                        <p>{issue.user.login}</p>
                    </div>
                </li>
            ))}
        </IssuesList>
    </Container>
    
    );
}
