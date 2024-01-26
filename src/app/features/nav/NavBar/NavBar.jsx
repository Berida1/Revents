import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button, Container, Grid, Menu } from 'semantic-ui-react';
import SignedOutMenu from '../menus/SignedOutMenu';
import SignedInMenu from '../menus/SignedInMenu';

const NavBar = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setAuthenticated(true);
  };

  const handleSignOut = () => {
    setAuthenticated(false);
    navigate('/');
  };

  return (
    <Grid>
      <Grid.Column width={10}>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={NavLink} to='/' header>
              <img src="/assets/logo.png" alt="logo" />
              Re-vents
            </Menu.Item>
            <Menu.Item as={NavLink} to='/events' name="Events" />
            <Menu.Item as={NavLink} to='/settings/about' name="People" />

            <Menu.Item>
              <Button as={Link} to='/createEvents' floated="right" positive inverted content="Create Event" />
            </Menu.Item>
            {authenticated ? <SignedInMenu signOut={handleSignOut} /> : <SignedOutMenu signIn={handleSignIn} />}
          </Container>
        </Menu>
      </Grid.Column>
    </Grid>
  );
};

export default NavBar;