import React, {Component} from 'react';
import Grid from '../components/grid';
import Axios from 'axios';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export default class LOBDetails extends Component{
    constructor (props) {
        super(props);
        this.state = {
            database: this.props.selectedDB,
            table: this.props.selectedTable,
            tableData:null
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({database: nextProps.selectedDB, table:nextProps.selectedTable},()=>{
            // Axios.get(`http://localhost:8080/mockData/${this.state.table}.json`)
            // .then(resp => {
            //     this.setState({tableData:resp.data});
            // });
            Axios.get(`http://localhost:56564/api/${this.state.table}`)
            .then(resp => {
                this.setState({tableData:resp.data});
            });
        });
    }

    componentDidMount(){
        // Axios.get(`http://localhost:8080/mockData/${this.state.table}.json`)
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