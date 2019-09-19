import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from "../../assets/logoSmall.svg"
import { ReactComponent as Hambuger } from "../../assets/hambuger.svg"

const Nav = styled.nav`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  height: 10vh;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = () => (
  <React.Fragment>
    <Nav>
      <Logo style={{height: "50%", width: "auto"}} />
      <Hambuger style={{height: "1.5rem", width: "auto"}} />
    </Nav>
  </React.Fragment>
);

export default Navigation;
