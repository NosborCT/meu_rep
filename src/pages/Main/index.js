import React, { useState, useCallback, useEffect } from 'react';
import { Container, Form, SubmitButton, List, DeleteButton } from './styles';
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'; 
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default function Main() {
    const [newRepo, setNewRepo] = useState('');
    const [repositorio, setRepositorio] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);
    
    // buscar repositórios do localStorage ao carregar a página
    useEffect(() => {
        const repoStorage = localStorage.getItem('repos');
        if (repoStorage) {
            setRepositorio(JSON.parse(repoStorage)); // Carrega os repositórios salvos
        }
    }, []);  

    // Salvando os repositórios no localStorage quando eles mudarem
    useEffect(() => {
        if (repositorio.length > 0) {
            localStorage.setItem('repos', JSON.stringify(repositorio)); // Salva os repositórios no localStorage
        }
    }, [repositorio]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {
            setLoading(true);
            setAlert(null);

            try {
                if (newRepo === '') {
                    throw new Error('Você precisa indicar um repositório');
                }

                const response = await api.get(`repos/${newRepo}`);

                const hasRepo = repositorio.find(repo => repo.name === response.data.full_name);
                if (hasRepo) {
                    throw new Error('Repositório duplicado.');
                }

                const data = {
                    name: response.data.full_name,
                };

                setRepositorio([...repositorio, data]);
                setNewRepo('');
            } catch (error) {
                setAlert(error.message);
            } finally {
                setLoading(false);
            }
        }
        submit();
    }, [newRepo, repositorio]);

    const handleInputChange = (e) => {
        setNewRepo(e.target.value);
        setAlert(null);
    };

    const handleDelete = useCallback((repo) => {
        const filteredRepos = repositorio.filter(r => r.name !== repo);
        setRepositorio(filteredRepos);
    }, [repositorio]);

    return (
        <Container>
            <h1>
                <FaGithub size={16} />
                Meus Repositórios
            </h1>

            <Form onSubmit={handleSubmit} error={alert}>
                <input
                    type="text"
                    value={newRepo}
                    placeholder={alert || "Adicionar Repositórios"}
                    onChange={handleInputChange}
                    style={{ borderColor: alert ? 'red' : '#ccc' }}
                />
                <SubmitButton loading={loading ? 1 : 0}>
                    {loading ? (
                        <FaSpinner color="#FFF" size={14} />
                    ) : (
                        <FaPlus color="#FFF" size={14} />
                    )}
                </SubmitButton>
            </Form>

            <List>
                {repositorio.map(repo => (
                    <li key={repo.name}>
                        <DeleteButton onClick={() => handleDelete(repo.name)}>
                            <FaTrash size={14} />
                        </DeleteButton>

                        <span>{repo.name}</span>

                        <Link to= {`/repositorio/${encodeURIComponent(repo.name)}`}>
                            <FaBars size={20} />
                        </Link>
                    </li>
                ))}
            </List>
        </Container>
    );
}
