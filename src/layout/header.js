import React from 'react';
import {Menu, Dropdown, Button, Label, MenuItem} from 'semantic-ui-react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../pages/home';


export default () => {
    return(
        <div>
            {/* <Router> */}
                <div>
                    <Menu size='tiny' style={{marginTop: '30px'}}>
                        <Menu.Item name='Shutterfly - Vizzini'/>
                        <MenuItem  name='home'>
                            <Label>Home</Label>
                            {/* <Link to='/'>Home</Link> */}
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
                    {/* <Route exact path="/" component={Home} /> */}
                </div>
            {/* </Router> */}
            
        </div>
    );
};