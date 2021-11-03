import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Alunos from './pages/Alunos';
import AlunosForm from './pages/Alunos/Form';
import AlunosDetail from './pages/Alunos/Detail';
import AlunosLoc from './pages/loc';

const Routes: React.FC = () => {
    return(
        <Switch>            
            <Route path='/alunos' exact component={Home} />
            <Route path='/' exact component={Alunos} />
            <Route path='/cadastro_aluno' exact component={AlunosForm} />
            <Route path='/tarefas_cadastro/:id' exact component={AlunosForm} />
            <Route path='/alunos/:id' exact component={AlunosDetail} />
            <Route path='/loc' exact component={AlunosLoc} />
        </Switch>
    );
}

export default Routes;