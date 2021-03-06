import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Vaults from 'containers/Vaults/Loadable';
import Header from 'components/Header';

const Wrapper = styled.div``;

export default function Main(props) {
  return (
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path="/vaults" component={Vaults} />
      </Switch>
    </Wrapper>
  );
}
