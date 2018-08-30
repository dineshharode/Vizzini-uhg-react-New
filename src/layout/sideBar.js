import React, {Component} from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import Axios from 'axios';
import GridView from '../components/grid';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LOBDetails from '../pages/lobDetailsPage';

export default class SideBar extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            data: {},
            activeItem:'',
            showTable:false,
            selectedDB:'',
            selectedTable:'',
            tableData:{}
        };
    }

    componentDidMount(){
        Axios.get("http://localhost:8080/temp.json")
        .then(resp => {
            this.setState({data : resp.data});
        });
    }

    loadLOBDetailsFromDB(){
        var lobList = null;
        return lobList;
    }

    onDBClick = (db, table) => {
        console.log('On Click');
        
        this.setState((prevState)=>{
            return {selectedDB:db,selectedTable:table,showTable:true}
        });
    }

    renderLOBList ()  {
        const activeItem  = this.state.activeItem;
        let database = this.state.data.DB;
        const menuItem = null;//database;
        if(database !== undefined){
            const menuItem = database.map(db => { 
                let tablesDDL = null;
                let queriesDDL = null;
                if(db["tables"].length > 0){
                    const tables = db["tables"].map(table => {
                        // return <Dropdown.Item key={table} onClick={() => this.onDBClick(db["name"],table)}>{table}</Dropdown.Item>
                        return <Dropdown.Item key={table} ><Link to={`/grid/${db['name']}/${table}`}>{table}</Link></Dropdown.Item>
                    });
                    const tableStr = `Tables (${db["tables"].length})`;
                    let keyName=`${db["name"]}table}`
                    tablesDDL = <Dropdown key={keyName} item text={tableStr}>
                        <Dropdown.Menu>
                            {tables}
                        </Dropdown.Menu>
                    </Dropdown>
                }
                if(db["teamQueries"] !== undefined && db["teamQueries"].length > 1){
                    const queries = db["teamQueries"].map(querie => {
                        return <Dropdown.Item key={querie}>{querie}</Dropdown.Item>
                    });
                    const queryStr = `Queries (${db["teamQueries"].length})`;
                    let keyName=`${db["name"]}queries}`
                    queriesDDL = <Dropdown key={keyName} item text={queryStr}>
                        <Dropdown.Menu>
                            {queries}
                        </Dropdown.Menu>
                    </Dropdown>
                }

                let tblQryList = <Dropdown key={db["name"]} item text={db["name"]}>
                <Dropdown.Menu>
                    {tablesDDL}
                    {queriesDDL}
                </Dropdown.Menu>
            </Dropdown>
                return tblQryList;
            });
            return menuItem;
        }
    }

    renderMenu(){
        return (
            <Menu secondary >
                {this.renderLOBList()}
            </Menu>
            
        );
    }

    setShowTable = () => {
        this.setState({showTable:false});
        // console.log("gotcha");
    }

    LOB = (props) => {
        // console.log(`DB: ${props.match.params.db}, Table: ${props.match.params.table}`);
        return (
            <LOBDetails db={props.match.params.db} table={props.match.params.table} />
        );
    }

     render() {
         
        return (
            <Router>
                <div>
                    <br/>
                    {this.renderMenu()}
                    {/* {
                        this.state.showTable && 
                        <GridView database={this.state.selectedDB} 
                        table={this.state.selectedTable}
                        setShowTable={this.setShowTable}/>
                    } */}
                    <Switch>
                        <Route exact path='/grid/:db/:table' component={this.LOB}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}