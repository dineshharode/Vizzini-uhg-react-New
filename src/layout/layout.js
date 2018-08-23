import React from 'react';
import {Container} from 'semantic-ui-react';
import Header from '../layout/header';



export default props => {
    return (
        <Container>
            <Header/>
            {props.children}
        </Container>
    );
};