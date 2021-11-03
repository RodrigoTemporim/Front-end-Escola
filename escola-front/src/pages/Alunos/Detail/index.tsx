import moment from 'moment';
import React, { useState, useEffect } from 'react';
import {Button, Card} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import api from '../../../services/api';
import './index.css';

interface IAluno{
    id: number;
    ra: string;
    nm: string;
    birth: string;
    ads: string;
    matriculado: boolean;
    created_at: Date;
    updated_at: Date;

}

const Detail: React.FC = () => {

    const history = useHistory()
    const {id} = useParams<{id: string}>()
    const [aluno, setAluno] = useState<IAluno>()

    function back(){
        history.goBack()
    }

    async function findAluno(){
        const response = await api.get<IAluno>(`/alunos/${id}`)
        console.log(response)
        setAluno(response.data)
    }

    useEffect(() => {
        findAluno()
    }, [id])



    return(
        <div className='container'>
            <br />
            <div className='aluno-header'>
                <h1>Detalhes da Tarefa</h1>
                <Button variant='dark' size='sm' onClick={back}>Voltar</Button>
            </div>
            <br />

            <Card style = {{ width: '18rem'}}></Card>
                <Card.Body>
                    <Card.Title>{aluno?.nm}</Card.Title>

                    <Card.Text>
                        <strong>Ra: </strong>
                        {aluno?.ra}
                        <br/>
                        <strong>Aniversário: </strong>
                        {aluno?.birth}
                        <br/>
                        <strong>Endereço: </strong>
                        {aluno?.ads}
                        <br/>
                        <strong>Estado: </strong>
                        {aluno?.matriculado ? "Matriculado" : "Não Matriculado"}
                        <br/>
                        <strong>Data de Cadastro:</strong>
                        {moment(aluno?.created_at).format('DD/MM/YYYY')}
                        <br/>
                        <strong>Data de Atualização:</strong>
                        {moment(aluno?.updated_at).format('DD/MM/YYYY')}
                    </Card.Text>
                </Card.Body>
        </div>
    );
}

export default Detail;