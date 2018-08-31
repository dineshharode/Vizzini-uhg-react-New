import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Loader } from 'semantic-ui-react'

class GridView extends Component {
    constructor(props){
        super(props);
        this.state = {
            databaseName: this.props.database,
            tableName: this.props.table,
            table:this.props.tableData,
        }
    }

    componentDidMount(){
        const tableHeaders = Object.keys(this.props.tableData[0]);
        this.setState({tableHeaders:tableHeaders});
    }

    componentWillReceiveProps(nextProps){
        const tableHeaders = Object.keys(nextProps.tableData[0]);
        this.setState({tableHeaders:tableHeaders});
    }

    loadTableHeaders(){
        let counter = 0;
        const tableHeaders = this.state.tableHeaders.map(header=>{
            const headerColumn = counter == 0 ? 
            <TableHeaderColumn key={header} width='90' dataField={header} isKey>{header}</TableHeaderColumn>
            : <TableHeaderColumn key={header} width='200' dataField={header} >{header}</TableHeaderColumn>
            counter++;
            return headerColumn;
        });
        return tableHeaders;
    }

    render() {
        if(this.state.tableHeaders)
        {
            return (
            <BootstrapTable data={ this.props.tableData } height='450' scrollTop={ 'Top' } >
                {this.loadTableHeaders()}
            </BootstrapTable>
            );
        } else {
            return (
                <div height='450'>
                    <Loader active inline='centered' size='large'>Loading...</Loader>
                </div>
            );
        }
    }
}

export default GridView;