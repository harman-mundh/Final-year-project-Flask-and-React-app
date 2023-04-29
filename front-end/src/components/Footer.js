import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

function FooterComponent() {
    return (
    // eslint-disable-next-line react/jsx-no-undef
    <Footer 
        style={{ 
        textAlign: 'center', 
        marginTop: '1rem',
        width: '100%' 
        }}>
    Author: Harman Singh ©2023
    </Footer>
    );
}

export default FooterComponent;