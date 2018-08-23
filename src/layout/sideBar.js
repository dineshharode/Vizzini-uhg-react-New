import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';
import App from '../components/app';


export default class SideBar extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            data: {}
        };
    }

    onShowTableClick = () => {
        this.setState({data:'Test Grid Data'});
        return <App/>
    }

     render() {
        return (
        <div>
            <Button onClick={this.onShowTableClick}>Show Tabel</Button>
        </div>
    )
  }
}