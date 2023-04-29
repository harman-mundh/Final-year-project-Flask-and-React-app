// source: https://www.youtube.com/watch?v=jWiZvlXW7NA&ab_channel=CodeWithAamir
// source: https://www.youtube.com/watch?v=BoCla6xcAiY&ab_channel=NOD

import React from 'react';
import { Card, Typography } from 'antd';

const { Title } = Typography;

function SearchResult({ title, ingredients, instructions, isOriginal }) {
  return (
    <Card
      title={
        <>
          {isOriginal && (
            <span style={{ marginRight: '10px', marginTop: '50px' }}>Original Input</span>
          )}
          <Title level={3}>{title}</Title>
        </>
      }
      style={{ marginBottom: '20px' }}
    >
      <p>
        <strong>Ingredients: </strong>
        {ingredients.map((ingredient, index) => (
            <p style={{marginTop:'5px', marginBottom:'2px'}} key={index}>{ingredient}</p>
          ))}
      </p>
      <p>
        <strong>Instructions: </strong>
        {instructions}
      </p>
    </Card>
  );
}

export default SearchResult;