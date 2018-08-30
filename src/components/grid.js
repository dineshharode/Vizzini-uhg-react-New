import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class GridView extends Component {
    constructor(props){
        super(props);
        this.state = {
            databaseName: props.database,
            tableName: props.table,
            table:props.tableData,
            tableHeaders:null
        }
    }

    componentWillMount(){
        const tableHeaders = Object.keys(this.state.table[0]);
        this.setState({tableHeaders:tableHeaders});
    }

    loadTableHeaders(){
        console.log(this.state.tableHeaders);
        let counter = 0;
        const tableHeaders = this.state.tableHeaders.map(header=>{
            const headerColumn = counter == 0 ? 
            <TableHeaderColumn key={header} width='90' dataField={header} isKey>{header}</TableHeaderColumn>
            : <TableHeaderColumn key={header} width='200' dataField={header} >{header}</TableHeaderColumn>
            counter++;
            return headerColumn;
        });
        console.log(tableHeaders);
        return tableHeaders;
    }

    render() {
        return (
        <BootstrapTable data={ this.state.table } height='450' scrollTop={ 'Top' } >
            {this.loadTableHeaders()}
        </BootstrapTable>
        );
    }
}

export default GridView;