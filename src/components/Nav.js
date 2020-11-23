import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyled = styled.nav`
  margin-bottom: 3rem;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
  }

  .logo {
    transform: translateY(-25%);
  }
`;

function Nav() {
  return (
    <NavStyled>
      <ul>
        <li>
          <Link to="/food">Food</Link>
        </li>
        <li>
          <Link to="/drink">Drink</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/book">Book</Link>
        </li>
      </ul>
    </NavStyled>
  );
}

export default Nav;
