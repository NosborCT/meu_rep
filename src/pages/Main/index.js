import React, { useState, useCallback, useEffect } from 'react';
import { Container, Form, SubmitButton, List, DeleteButton } from './styles'; // Importa os componentes de estilo
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'; // Importa ícones do Font Awesome
import api from '../../services/api'; // Importa a API para fazer requisições HTTP
import { Link } from 'react-router-dom'; // Importa o Link para navegação entre rotas

export default function Main() {
    // Estados do componente
    const [newRepo, setNewRepo] = useState(''); // Armazena o nome do novo repositório
    const [repositorio, setRepositorio] = useState([]); // Armazena a lista de repositórios
    const [loading, setLoading] = useState(false); // Controla o estado de carregamento
    const [alert, setAlert] = useState(null); // Armazena mensagens de erro ou alerta

    // useEffect para buscar repositórios salvos no localStorage ao carregar a página
    useEffect(() => {
        const repoStorage = localStorage.getItem('repos'); // Busca os repositórios salvos
        if (repoStorage) {
            setRepositorio(JSON.parse(repoStorage)); // Atualiza o estado com os repositórios do localStorage
        }
    }, []); // Executa apenas ao carregar o componente (array vazio)

    // useEffect para salvar os repositórios no localStorage sempre que a lista de repositórios mudar
    useEffect(() => {
        if (repositorio.length > 0) {
            localStorage.setItem('repos', JSON.stringify(repositorio)); // Salva a lista atualizada de repositórios no localStorage
        }
    }, [repositorio]); // Executa sempre que o estado "repositorio" for atualizado

    // Função para lidar com o envio do formulário
    const handleSubmit = useCallback((e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

        async function submit() {
            setLoading(true); // Ativa o estado de carregamento
            setAlert(null); // Reseta qualquer alerta anterior

            try {
                // Verifica se o campo de entrada está vazio
                if (newRepo === '') {
                    throw new Error('Você precisa indicar um repositório'); // Gera um erro se o campo estiver vazio
                }

                // Faz a requisição à API do GitHub para buscar o repositório
                const response = await api.get(`repos/${newRepo}`);

                // Verifica se o repositório já foi adicionado anteriormente
                const hasRepo = repositorio.find(repo => repo.name === response.data.full_name);
                if (hasRepo) {
                    throw new Error('Repositório duplicado.'); // Gera um erro se o repositório for duplicado
                }

                // Cria um novo objeto com os dados do repositório
                const data = {
                    name: response.data.full_name,
                };

                // Atualiza a lista de repositórios com o novo repositório adicionado
                setRepositorio([...repositorio, data]);
                setNewRepo(''); // Reseta o campo de entrada
            } catch (error) {
                setAlert(error.message); // Define a mensagem de erro/alerta
            } finally {
                setLoading(false); // Desativa o estado de carregamento
            }
        }
        submit(); // Chama a função de envio
    }, [newRepo, repositorio]); // Dependências da função, executa quando "newRepo" ou "repositorio" mudar

    // Função para lidar com a mudança no campo de entrada
    const handleInputChange = (e) => {
        setNewRepo(e.target.value); // Atualiza o estado com o valor do campo de entrada
        setAlert(null); // Reseta qualquer alerta
    };

    // Função para deletar um repositório da lista
    const handleDelete = useCallback((repo) => {
        // Filtra a lista de repositórios removendo o que foi clicado para deletar
        const filteredRepos = repositorio.filter(r => r.name !== repo);
        setRepositorio(filteredRepos); // Atualiza o estado com a lista filtrada
    }, [repositorio]); // Dependência da função, executa quando "repositorio" mudar

    return (
        <Container>
            <h1>
                <FaGithub size={16} /> {/* Ícone do GitHub */}
                Meus Repositórios
            </h1>

            {/* Formulário para adicionar novos repositórios */}
            <Form onSubmit={handleSubmit} error={alert}>
                <input
                    type="text"
                    value={newRepo} // Valor do campo controlado pelo estado
                    placeholder={alert || "Adicionar Repositórios"} // Exibe a mensagem de alerta ou o texto padrão
                    onChange={handleInputChange} // Função chamada ao digitar
                    style={{ borderColor: alert ? 'red' : '#ccc' }} // Altera a cor da borda se houver um alerta
                />
                <SubmitButton loading={loading ? 1 : 0}> {/* Botão de envio */}
                    {loading ? (
                        <FaSpinner color="#FFF" size={14} /> // Ícone de carregamento enquanto espera a resposta da API
                    ) : (
                        <FaPlus color="#FFF" size={14} /> // Ícone de adicionar quando não está carregando
                    )}
                </SubmitButton>
            </Form>

            {/* Lista de repositórios adicionados */}
            <List>
                {repositorio.map(repo => (
                    <li key={repo.name}>
                        {/* Botão de deletar o repositório */}
                        <DeleteButton onClick={() => handleDelete(repo.name)}>
                            <FaTrash size={14} /> {/* Ícone de lixeira */}
                        </DeleteButton>

                        <span>{repo.name}</span> {/* Nome do repositório */}

                        {/* Link para acessar os detalhes do repositório */}
                        <Link to= {`/repositorio/${encodeURIComponent(repo.name)}`}>
                            <FaBars size={20} /> {/* Ícone de barras para acessar detalhes */}
                        </Link>
                    </li>
                ))}
            </List>
        </Container>
    );
}
