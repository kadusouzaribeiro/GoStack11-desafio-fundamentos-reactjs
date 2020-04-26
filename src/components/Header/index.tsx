import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        {/* Colocar barra abaixo do site ativo */}
        <NavLink to="/" exact activeClassName="activePage">
          Listagem
        </NavLink>
        <NavLink to="/import" activeClassName="activePage">
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
