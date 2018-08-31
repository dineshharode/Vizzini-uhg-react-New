import React, {Component} from 'react';
import Layout from '../layout/layout';
import App from '../components/app';
import SideBar from '../layout/sideBar';
import Grid from '../components/grid';
import Axios from 'axios';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export default class LOBDetails extends Component{
    constructor (props) {
        super(props);
        this.state = {
            database: props.db,
            table: props.table,
            tableData: null
        }
        // Axios.get("http://localhost:8080/tableData.json")
        // .then(resp => {
        //     this.setState({tableData:resp.data});
        // });
       
        Axios.get(`http://localhost:56564/api/${this.state.table}`)
        .then(resp => {
            this.setState({tableData:resp.data});
        });
    }

    render(){
        if(!this.state.tableData){
            return (
                <div height='450'>
                    <Loader active inline='centered' size='large'>Loading...</Loader>
                </div>
            );
        }
        else {
            return(
                <Grid database={this.state.database} table={this.state.table} tableData={this.state.tableData}/>
            );
        }
    }
}