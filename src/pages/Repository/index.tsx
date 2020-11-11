import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/LogoGithub.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>

      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>
              Nome do repositório
            </strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>123</strong>
            <span>Repo Stars</span>
          </li>
          <li>
            <strong>123</strong>
            <span>Repo Forks</span>
          </li>
          <li>
            <strong>123</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="222">
          <div>
            <strong> Issues preencher </strong>
            <p> preencher </p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
