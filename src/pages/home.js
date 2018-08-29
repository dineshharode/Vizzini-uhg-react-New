import React, {Component} from 'react';
import Layout from '../layout/layout';
import App from '../components/app';
import SideBar from '../layout/sideBar';
import {BrowserRouter as Router} from 'react-router-dom';

export default class Home extends Component{
    render(){
        return(
            <Layout>
                <SideBar></SideBar>
            </Layout>
        );
    }
}