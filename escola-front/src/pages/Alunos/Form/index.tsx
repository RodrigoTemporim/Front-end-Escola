import React, {useState, useEffect, ChangeEvent} from 'react';
import {Button, Form} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import api from '../../../services/api';
import './index.css';

interface IAluno{    
    ra: string;
    nm: string;
    birth: string;
    ads: string;

}

const Alunos: React.FC = () => {
    
    const history = useHistory()
    const {id} = useParams<{id: string}>()

    const [model, setModel] = useState<IAluno>({
        ra: '',
        nm: '',
        birth: '',
        ads: ''
    })

    useEffect(() => {
        console.log(id)
        if(id !== undefined){
        findAluno(id)
        }
    }, [id])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }


    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        
        if(id !== undefined){
            const response = await api.put(`/alunos/${id}`, model)
        } else{
            const response = await api.post('alunos', model)
        }
        back()

        console.log(model)
    }

    function back(){
        history.goBack()
    }

    async function findAluno(id: string){
        const response = await api.get(`alunos/${id}`)
        console.log(response)
        setModel({
            ra: response.data.ra,
            nm: response.data.nm,
            birth: response.data.birth,
            ads: response.data.ads
        })
    }


    return(
        <div className='container'>
            <br />
            <div className='aluno-header'>
                <h1>Nova Tarefa</h1>
                <Button variant='dark' size='sm' onClick={back}>Voltar</Button>
            </div>
            <br />

            <div className='copntainer'>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>RA</Form.Label>
                        <Form.Control type='text' name='ra' value={model.ra} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type='text' name='nm' value={model.nm} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nascimento</Form.Label>
                        <Form.Control type='date' name='birth' value={model.birth} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type='text' name='ads' value={model.ads} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} required/>
                    </Form.Group>
                    <br/>
                    <Button variant='dark' type='submit'> Cadastrar </Button>
                </Form>
            </div>
        </div>
    );
}

export default Alunos;