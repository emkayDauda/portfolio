import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";

export default () => {
    return <ContactSection>
        <Heading>Convinced? <span>Hit me up...</span> </Heading>
        
    </ContactSection>
}


const ContactSection = styled.div`
 h1 {
     text-align: center;
    
    span {
        color: green;
        font-size: 1.2rem;
        margin-left: .5rem;
    }
 }
`