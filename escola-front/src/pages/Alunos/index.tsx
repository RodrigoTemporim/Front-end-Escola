import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap'
import api from '../../services/api';
import moment from 'moment';
import { useHistory } from 'react-router';
import './index.css';


interface IAluno {
    id: number;
    ra: string;
    nm: string;
    birth: string;
    ads: string;
    matriculado: boolean;
    created_at: Date;
    updated_at: Date;

}



const Alunos: React.FC = () => {

    const [alunos, setAlunos] = useState<IAluno[]>([])
    const history = useHistory()

    useEffect(() => {
        loadAlunos()
    }, [])

    async function loadAlunos() {
        const response = await api.get('/alunos')
        console.log(response);
        setAlunos(response.data)
    }

    function newAluno() {
        history.push('/cadastro_aluno')
    }

    function editAluno(id: number) {
        history.push(`/cadastro_aluno/${id}`)
    }

    function viewAluno(id: number) {
        history.push(`/alunos/${id}`)
    }

    async function matAluno(id: number) {
        await api.patch(`/alunos/${id}`)
        loadAlunos()
    }

    async function deleteAluno(id: number) {
        await api.delete(`/alunos/${id}`)
        loadAlunos()
    }

    return (
        <body>
            <div className='container'>

                <br />

                <div className='aluno-header'>
                    <h1>Alunos</h1>
                    <Button variant='dark' size='sm' onClick={newAluno}>Cadastro</Button>
                </div>
                <br />
                <Table striped bordered hover variant="dark" className='text-center'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ra</th>
                            <th>Nome</th>
                            <th>Nascimento</th>
                            <th>Endereço</th>
                            <th>Matriculado</th>
                            <th>Atualizado em:</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alunos.map(aluno => (
                                <tr key={aluno.id}>
                                    <td>{aluno.id}.toUpperCase</td>
                                    <td>{aluno.ra}.toUpperCase</td>
                                    <td>{aluno.nm}.toUpperCase</td>
                                    <td>{moment(aluno?.birth).format('DD/MM/YYYY')}</td>
                                    <td>{aluno.ads}.toUpperCase</td>
                                    <td>{aluno.matriculado ? 'Sim' : 'Não'}</td>
                                    <td>{moment(aluno?.updated_at).format('DD/MM/YYYY')}</td>
                                    <td>
                                        <Button disabled={!aluno.matriculado} size="sm" variant="primary" onClick={() => editAluno(aluno.id)}>Editar</Button>{' '}
                                        <Button disabled={!aluno.matriculado} size="sm" variant="success" onClick={() => matAluno(aluno.id)}>Finalizar</Button>{' '}
                                        <Button size="sm" variant="warning" onClick={() => viewAluno(aluno.id)}>Visualizar</Button>{' '}
                                        <Button size="sm" variant="danger" onClick={() => deleteAluno(aluno.id)}>Remover</Button>{' '}
                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>
                </Table>

            </div>
        </body>
    );
}

export default Alunos;