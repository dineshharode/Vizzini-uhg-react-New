import React from 'react';
import {Container} from 'semantic-ui-react';
import Header from '../layout/header';
import {BrowserRouter as Router} from 'react-router-dom';


export default props => {
    return (
        <Container>
            <Header/>
            {/* <Router> */}
                {props.children}
            {/* </Router> */}
        </Container>
    );
};