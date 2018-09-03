import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'

class RowDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            RowData:[]
        }
    }

    componentWillMount(){
        const rowHeaders = Object.keys(this.props.data);
        let table = [];
        for(let i=0;i<rowHeaders.length;i++){
            let row = {};
            row.name = rowHeaders[i];
            row.value = this.props.data[rowHeaders[i]];
            table.push(row);
        }
        this.setState({RowData:table});
    }

    loadTableHeaders(){
        const tableHeaders = <BootstrapTable data={ this.state.RowData }>
            <TableHeaderColumn key="name" dataField="name" isKey={true} width="200" >Column Name</TableHeaderColumn>
            <TableHeaderColumn key="value" dataField="value">Column Value</TableHeaderColumn>
          </BootstrapTable>
        return tableHeaders;
    }

    render() {
      if (this.state.RowData) {
        return (<div>
            {this.loadTableHeaders()}
        </div>)
      } else {
        return (<p>No Content available</p>);
      }
    }
  }

  export default RowDetails;