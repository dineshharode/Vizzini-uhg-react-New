import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Loader } from 'semantic-ui-react'
import RowDetails from './rowDetails';

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

    isExpandableRow(row) {
        return true;
      }
    
      expandComponent(row) {
        return (
          <RowDetails data={ row } />
        );
      }
    
      expandColumnComponent ({isExpandableRow, isExpanded }) {
        let content = '';
            content = (isExpanded ? '(-)' : '(+)' );
        return (
          <div> { content } </div>
        );
      }

    render() {
        if(this.state.tableHeaders)
        {
            const options = {
                expandRowBgColor: 'rgb(255, 255, 255)'
              };
            return (
            <BootstrapTable data={ this.props.tableData } height='450' scrollTop={ 'Top' } 
            pagination = {true} options = {options} expandableRow={ this.isExpandableRow }
            expandComponent={ this.expandComponent } 
            expandColumnOptions={ {
              expandColumnVisible: true,
              expandColumnComponent: this.expandColumnComponent,
              columnWidth: 35
            } }>
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