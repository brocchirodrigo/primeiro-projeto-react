import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/LogoGithub.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="http://">
        <img
          src="https://avatars2.githubusercontent.com/u/54460900?s=460&u=fdde0f8f91ef3e4cbd1c593153ce1e3a1b4d8f05&v=4"
          alt="Rodrigo Brocchi"
        />
        <div>
          <strong>Teste repo</strong>
          <p>
            Teste
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
