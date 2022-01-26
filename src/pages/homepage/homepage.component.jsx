import React from "react";
//import './homepage.styles.scss'; replace with styled element
import Directory from '../../components/directory/directory.component';


//styled-components
import {HomePageContainer} from './homepage.style';
export const Homepage = () => (
    <HomePageContainer>
        <Directory/>
    </HomePageContainer>
)