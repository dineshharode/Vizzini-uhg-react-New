import React, { Component } from 'react';

export default class GridView extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedDB:props.database,
            selectedTable: props.table,
            showTable:false,
            setShowTable: props.setShowTable
        };
        console.log(`Grid DB : ${this.state.selectedDB}, Table: ${this.state.selectedTable}`);
    }

    componentWillUpdate(nextProps, nextState) {
          this.props.setShowTable();
      }

    render() {
        return (
        <div >DB: {this.state.selectedDB} Table:  {this.state.selectedTable} grid</div>
        );
    }
}