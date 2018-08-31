import React, {Component} from 'react';
import {Menu, Dropdown, Button, Label, MenuItem} from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from '../pages/home';


export default class Header extends Component{
    setRedirect = ()=>{
        return window.location.reload();
    }
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Menu size='tiny' style={{marginTop: '30px'}}>
                            <Menu.Item name='Shutterfly - Vizzini'/>
                            <MenuItem  name='home'>
                                <Link to='/' onClick={this.setRedirect}>Home</Link>
                            </MenuItem>
                            <Menu.Menu position='right'>
                                <Dropdown item text='Start Page'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Upload</Dropdown.Item>
                                        <Dropdown.Item>Book Proof Approvals</Dropdown.Item>
                                        <Dropdown.Item>Book Proof AutoApprovals</Dropdown.Item>
                                        <Dropdown.Item>Reports: Exceptions</Dropdown.Item>
                                        <Dropdown.Item>Postcard Order Management</Dropdown.Item>
                                        <Dropdown.Item>WG Components Upload</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Menu.Item>
                                    <Button primary>Logout</Button>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                        <Route exact path="/home" component={Home} />
                    </div>
                </Router>
            </div>
        );
    }
};