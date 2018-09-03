import React, {Component} from 'react';
import Grid from '../components/grid';
import Axios from 'axios';
import { Label, Loader} from 'semantic-ui-react'

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
        this.setState({database: nextProps.selectedDB, table:nextProps.selectedTable},()=>{this.loadData()});
    }

    componentDidMount(){
        this.loadData();
    }

    loadData(){
        Axios.get(`http://localhost:8080/mockData/${this.state.table}.json`)
        .then(resp => {
            this.setState({tableData:resp.data});
        });
        // Axios.get(`http://localhost:56564/api/${this.state.table}`)
        // .then(resp => {
        //     this.setState({tableData:resp.data});
        // });
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
                <div>
                    <Label pointing='right' size='large'>{this.state.database}</Label>
                    <Label pointing='below' size='large'>{this.state.table}</Label>
                    <br/>
                    <Grid database={this.state.database} table={this.state.table} tableData={this.state.tableData}/>
                </div>
            );
        }
    }
}