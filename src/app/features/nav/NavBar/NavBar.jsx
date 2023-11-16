import React, { Component } from 'react'
import { Button, Container, Grid, Menu } from 'semantic-ui-react';

class NavBar extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Menu inverted fixed="top">
                        <Container>
                            <Menu.Item header>
                                <img src="/assets/logo.png" alt="logo" />
                                Re-vents
                            </Menu.Item>
                            <Menu.Item name="Events" />
                            <Menu.Item>
                                <Button floated="right" positive inverted content="Create Event" />
                            </Menu.Item>
                            <Menu.Item position="right">
                                <Button basic inverted content="Login" />
                                <Button basic inverted content="Sign Out" style={{ marginLeft: '0.5em' }} />
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Grid.Column>
            </Grid>
        )
    }
}
export default NavBar;