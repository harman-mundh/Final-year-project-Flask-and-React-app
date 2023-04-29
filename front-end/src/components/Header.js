import React from "react";
import { Icon } from '@iconify/react';
import { Layout } from "antd";

const { Header } = Layout;

function HeaderComponent() {
    return(
        // eslint-disable-next-line react/jsx-no-undef
        <Header 
            style={{ 
                height: '100px', 
                background: '#567189', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
                }}>
        <Icon icon="twemoji:fork-and-knife-with-plate" 
            style={{ 
                fontSize: '50px', 
                marginRight: '20px'
                }}/>
        <div style={{ 
            fontSize: '40px', 
            fontWeight: 'bold', 
            color: '#fff', 
            fontFamily: 'Arial'
            }}>
                Recipe Recommender
        </div>
      </Header>
    );
}

export default HeaderComponent;