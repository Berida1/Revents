import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';

const SettingsNav = () => {
  return (
    <Fragment>
      <Menu vertical>
        <Header icon="user" attached inverted color="grey" content="Profile" />
        {/* Corrected the to prop here */}
        <Menu.Item as={NavLink} to='/settings/basic'>Basics</Menu.Item>
        <Menu.Item as={NavLink} to='/settings/about'>About Me</Menu.Item>
        <Menu.Item as={NavLink} to='/settings/photos'>My Photos</Menu.Item>
      </Menu>
      <Menu vertical>
        <Header
          icon="settings"
          attached
          inverted
          color="grey"
          content="Account"
        />
        <Menu.Item as={NavLink} to='/settings/accounts'>My Account</Menu.Item>
      </Menu>
    </Fragment>
  );
};

export default SettingsNav;
