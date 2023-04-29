// source: https://www.youtube.com/watch?v=fdyqutmcI2Q&ab_channel=TheCodingTrain
// source: https://www.youtube.com/watch?v=rhzKDrUiJVk&t=4s&ab_channel=WebDevSimplified

import React, { useState } from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';

const { Content } = Layout;

function App() {
  const [showResponseResults, setViewResponseResults] = useState(false);
  const [searchResponse, setResponseResults] = useState([]);

  /**
   * Function to get similar foods based on ingredients, from a localhost API call
   * 
   * @param {value} SearchValue - Food Title constrained to pre-existing names
   * @returns {JSON} Response - 5 most similar foods to input search 
   */
  const getResponse = async function getResponse (value) {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/recommendation?title=${value}`);
      setResponseResults(response.data);
      setViewResponseResults(true);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Take a list of items called Ingredients and parse each element one by one.
   * The item ingredients are stored in a list, which is a JSON attribute 
   * 
   * @param {list} IngredientsList - nput Food ingredients List
   * @returns {string} - Extracted elements
   */
  const parseIngredients = function (ingredientsList) {
    if (!ingredientsList) return [];
    const regex = /'([^']*)'/g;
    const ingredients = [];
    let match;
    while ((match = regex.exec(ingredientsList)) !== null) {
      ingredients.push(match[1]);
    }
    return ingredients;
  };

  return (
    <Layout>
      <HeaderComponent />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ paddingTop: '20px' }}>
          <SearchBar onSelect={getResponse} />
          {showResponseResults && (
            <div style={{ marginTop: '20px', background: 'none' }}>
              {searchResponse.map((result, index) => (
                <SearchResult
                  key={result.id}
                  title={result.Title}
                  ingredients={parseIngredients(result.Ingredients)}
                  instructions={result.Instructions}
                  isOriginal={index === 0}
                />
              ))}
            </div>
          )}
        </div>
      </Content>
        <FooterComponent />
    </Layout>
  );
  
};

export default App;