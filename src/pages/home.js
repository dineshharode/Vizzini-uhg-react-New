import React, {Component} from 'react';
import Layout from '../layout/layout';
import App from '../components/app';
import SideBar from '../layout/sideBar';


export default class Home extends Component{
    render(){
        return(
            <Layout>
                <SideBar ></SideBar>
                <App></App>
            </Layout>
        );
    }
}